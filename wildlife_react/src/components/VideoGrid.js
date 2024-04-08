//VideoGrid.js

import React from 'react';
import Grid from '@mui/material/Grid';
import VideoCard from './VideoCard';

function VideoGrid({ videos, onDelete }) {
  return (
    <Grid container spacing={2}>
      {videos.map((video, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <VideoCard video={video} onDelete={onDelete}/>
        </Grid>
      ))}
    </Grid>
  );
}

export default VideoGrid;
