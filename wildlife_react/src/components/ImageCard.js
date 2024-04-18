import React from 'react';
import { supabase } from '../supabaseClient'; // Ensure correct path
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

function ImageCard({ image, onDelete }) {
  const handleDelete = async () => {
    // Remove the file directly using the title, no folder prefix
    const { error } = await supabase.storage
      .from('gallery')
      .remove([image.title]);

    if (error) {
      console.error('Error deleting image:', error);
    } else {
      onDelete(); // Call the onDelete callback, which should trigger a refresh in the parent component
    }
  };

  return (
    <Card>
      <CardMedia
        component="img"
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
