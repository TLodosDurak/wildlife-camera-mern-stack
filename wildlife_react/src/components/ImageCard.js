import React from 'react';
import { supabase } from '../supabaseClient'; // Ensure correct path
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

function ImageCard({ image, onDelete }) {
  const handleDelete = async () => {
    const { error: deleteError } = await supabase.storage.from('gallery').remove([image.title]);

    if (deleteError) {
      console.error('Error deleting image:', deleteError);
    } else {
      const { error: dbError } = await supabase.from('files').delete().match({ file_name: image.title });
      if (dbError) {
        console.error('Error removing metadata from database:', dbError);
      } else {
        onDelete(); // Call the onDelete callback, which should trigger a refresh in the parent component
      }
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
