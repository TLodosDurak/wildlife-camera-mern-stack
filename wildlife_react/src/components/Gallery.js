// Gallery.js
import React, { useEffect, useState } from 'react';
import ImageGrid from './ImageGrid';
import VideoGrid from './VideoGrid';

function Gallery() {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);

  const fetchImages = () => {
    // Fetch images
    fetch('http://localhost:5000/api/images')
      .then(response => response.json())
      .then(data => {
        const imageData = data.map(filename => ({
          url: `/images/${filename}`,
          title: filename, // Assuming you use 'title' in ImageCard for alt text or captions
        }));
        setImages(imageData);
      })
      .catch(error => console.error("Failed to fetch images:", error));
      
  };

  const fetchVideos = () => {
    // Fetch videos
    fetch('http://localhost:5000/api/videos')
    .then(response => response.json())
      .then(data => {
          const videoData = data.map(filename => ({
          url: `/videos/${filename}`,
          title: filename, // Assuming you use 'title' in VideoCard for alt text or captions
        }));
        setVideos(videoData);
      })
      .catch(error => console.error("Failed to fetch videos:", error));
  };
  
  useEffect(() => {
    fetchImages();
    fetchVideos(); 
    }, []);
    console.log(ImageGrid);
    
    console.log(VideoGrid);
    
    const handleDeleteImage = () => {
      fetchImages(); // Re-fetch images after one is deleted
    };
    
    const handleDeleteVideo = () => {
      fetchVideos(); // Re-fetch videos after one is deleted
    };

    return (
    <div>
      <ImageGrid images={images} onDelete={handleDeleteImage} />
      <VideoGrid videos={videos} onDelete={handleDeleteVideo} />
    </div>
  );
}

export default Gallery;
