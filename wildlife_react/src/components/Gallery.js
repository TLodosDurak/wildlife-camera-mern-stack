import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient'; // Correct path
import ImageGrid from './ImageGrid';
import VideoGrid from './VideoGrid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';

function Gallery() {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);

  const fetchFiles = async () => {
    let { data: userDevices, error: userDevicesError } = await supabase
      .from('registered_devices')
      .select('user_uuid');
    
    if (userDevicesError) {
      console.error('Error fetching user devices:', userDevicesError);
      return;
    }

    const userUuids = userDevices.map(device => device.user_uuid);

    let { data: files, error: filesError } = await supabase
      .from('files')
      .select('*')
      .in('user_uuid', userUuids);

    if (filesError) {
      console.error('Error fetching files:', filesError);
      return;
    }

    // Filter image and video files and generate public URLs
    const images = files.filter(file => file.file_path.endsWith('.jpg') || file.file_path.endsWith('.png'));
    const videos = files.filter(file => file.file_path.endsWith('.mp4'));

    const imageUrls = await Promise.all(images.map(async file => ({
      url: supabase.storage.from('gallery').getPublicUrl(file.file_name).publicURL,
      title: file.file_name,
      filePath: file.file_path
    })));

    const videoUrls = await Promise.all(videos.map(async file => ({
      url: supabase.storage.from('gallery').getPublicUrl(file.file_name).publicURL,
      title: file.file_name,
      filePath: file.file_path
    })));

    setImages(imageUrls);
    setVideos(videoUrls);
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  const handleDeleteFile = async (filePath, fileType) => {
    const { error } = await supabase.storage.from('gallery').remove([filePath]);

    if (error) {
      console.error(`Failed to delete ${fileType}:`, error);
    } else {
      fetchFiles(); // Re-fetch files after deletion
    }
  };

  return (
    <Container maxWidth="xlg" style={{ marginTop: '20px' }}>
      <Accordion defaultExpanded sx={{ mb: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Images</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ImageGrid images={images} onDelete={(filePath) => handleDeleteFile(filePath, 'image')} />
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded sx={{ mb: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
          <Typography>Videos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <VideoGrid videos={videos} onDelete={(filePath) => handleDeleteFile(filePath, 'video')} />
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}

export default Gallery;
