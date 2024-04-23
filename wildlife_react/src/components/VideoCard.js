import React from 'react';
import { supabase } from '../supabaseClient'; // Ensure correct path
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function VideoCard({ video, onDelete }) {
  const handleDelete = async () => {
    const { error: deleteError } = await supabase.storage.from('gallery').remove([video.title]);

    if (deleteError) {
      console.error('Error deleting video:', deleteError);
    } else {
      const { error: dbError } = await supabase.from('files').delete().match({ file_name: video.title });
      if (dbError) {
        console.error('Error removing metadata from database:', dbError);
      } else {
        onDelete(); // Trigger a refresh in the parent component
      }
    }
  };

  return (
    <Card>
      <video controls style={{ width: '100%' }}>
        <source src={video.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {video.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={handleDelete}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default VideoCard;
