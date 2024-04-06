// ImageCard.js
import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

function ImageCard({ image, onDelete }) {
  const handleDelete = () => {
    fetch(`http://localhost:5000/api/images/${image.title}`, { method: 'DELETE' })
      .then((response) => {
        if (response.ok) {
          onDelete(); // Call the onDelete callback, which should trigger a refresh in the parent component
        }
      });
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={image.url}
        alt={image.title}
      />
      <CardActions>
        <Button size="small" color="primary" onClick={handleDelete}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default ImageCard;
