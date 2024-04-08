import React, { useEffect, useState } from 'react';
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

  const fetchImages = () => {
    fetch('http://localhost:5000/api/images')
      .then(response => response.json())
      .then(data => {
        const imageData = data.map(filename => ({
          url: `/images/${filename}`,
          title: filename,
        }));
        setImages(imageData);
      })
      .catch(error => console.error("Failed to fetch images:", error));
  };

  const fetchVideos = () => {
    fetch('http://localhost:5000/api/videos')
    .then(response => response.json())
      .then(data => {
          const videoData = data.map(filename => ({
          url: `/videos/${filename}`,
          title: filename,
        }));
        setVideos(videoData);
      })
      .catch(error => console.error("Failed to fetch videos:", error));
  };
  
  useEffect(() => {
    fetchImages();
    fetchVideos(); 
  }, []);
    
  const handleDeleteImage = () => {
    fetchImages(); // Re-fetch images after one is deleted
  };
    
  const handleDeleteVideo = () => {
    fetchVideos(); // Re-fetch videos after one is deleted
  };

  return (
    <Container maxWidth="xlg" style={{ marginTop: '20px' }}>
      <Accordion defaultExpanded sx={{ mb: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Images</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ImageGrid images={images} onDelete={handleDeleteImage} />
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded sx={{ mb: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Videos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <VideoGrid videos={videos} onDelete={handleDeleteVideo} />
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}

export default Gallery;
