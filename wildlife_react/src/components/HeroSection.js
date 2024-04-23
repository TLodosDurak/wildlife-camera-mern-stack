import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';

function HeroSection({ onLearnMoreClick }) {
  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: 'auto', md: '80vh' },
        backgroundImage: 'url("hero-pic.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 1,
          color: 'common.white',
          textAlign: 'center',
          py: { xs: 8, md: 12 },
        }}
      >
        <Typography variant="h1" gutterBottom>
          Smart <span style={{ color: '#4caf50', textShadow: '0 0 8px #fff' }}>Wildlife</span> Monitoring <span style={{ color: '#ff9800', textShadow: '0 0 8px #fff' }}>Camera</span>
        </Typography>
        <Typography variant="h5" gutterBottom>
          Your window to the wild.
        </Typography>
        <Button variant="contained" color="primary" size="large" onClick={onLearnMoreClick} sx={{ mt: 4 }}>
          Learn More
        </Button>
      </Container>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 0,
        }}
      />
    </Box>
  );
}

export default HeroSection;
