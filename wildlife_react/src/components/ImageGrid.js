// ImageGrid.js
import React from 'react';
import Grid from '@mui/material/Grid';
import ImageCard from './ImageCard';

function ImageGrid({ images, onDelete }) {
    return (
      <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ImageCard image={image} onDelete={onDelete} />
          </Grid>
        ))}
      </Grid>
    );
  }  

export default ImageGrid;
