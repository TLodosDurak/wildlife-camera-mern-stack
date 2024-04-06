const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5000; // You can choose any port that is not in use

app.use(cors()); // Allows cross-origin requests
app.use(express.json()); // Parses JSON body in requests

const imagesDir = path.join(__dirname, 'images');
const videosDir = path.join(__dirname, 'videos');

// List images
app.get('/api/images', (req, res) => {
  fs.readdir(imagesDir, (err, files) => {
    if (err) {
      return res.status(500).send('Unable to list images');
    }
    res.json(files);
  });
});

// List videos
app.get('/api/videos', (req, res) => {
    fs.readdir(videosDir, (err, files) => {
      if (err) {
        return res.status(500).send('Unable to list videos');
      }
      // Filter for only .mp4 files
      const mp4Files = files.filter(file => path.extname(file) === '.mp4');
      res.json(mp4Files);
    });
  });
  

// Delete an image
app.delete('/api/images/:filename', (req, res) => {
  const filePath = path.join(imagesDir, req.params.filename);
  fs.unlink(filePath, (err) => {
    if (err) {
      return res.status(500).send('Unable to delete image');
    }
    res.send('Image deleted');
  });
});

// Delete a video
app.delete('/api/videos/:filename', (req, res) => {
  const filePath = path.join(videosDir, req.params.filename);
  fs.unlink(filePath, (err) => {
    if (err) {
      return res.status(500).send('Unable to delete video');
    }
    res.send('Video deleted');
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
