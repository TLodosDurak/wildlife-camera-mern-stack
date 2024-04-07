import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';

function HeroSection() {
  return (
    <Box
      sx={(theme) => ({
        width: '100%',
        backgroundImage: `linear-gradient(to bottom, ${theme.palette.primary.dark}, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: 'auto',
        paddingBottom: '2rem',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Typography variant="h2" sx={{ mb: 4, textAlign: 'center', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
          Smart Wildlife Monitoring Camera
        </Typography>
        <Typography variant="h5" sx={{ mb: 4, textAlign: 'center', color: 'text.secondary' }}>
          Your window to the wild.
        </Typography>
        <Button variant="contained" color="primary" sx={{ marginBottom: '2rem' }}>
          Learn More
        </Button>
      </Container>
      <Box
        sx={{
          mt: 4,
          height: 300,
          backgroundImage: 'url("hero-pic.png")',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />
    </Box>
  );
}

export default HeroSection;
