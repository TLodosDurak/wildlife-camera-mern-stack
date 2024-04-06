// VideoCard.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function VideoCard({ video, onDelete }) {
  const handleDelete = () => {
    fetch(`http://localhost:5000/api/videos/${video.title}`, { method: 'DELETE' })
      .then((response) => {
        if (response.ok) {
          onDelete(); // Trigger a refresh in the parent component
        }
      });
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
export default VideoCard

