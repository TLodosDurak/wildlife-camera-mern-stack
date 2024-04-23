import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';  // Using GitHub icon from Material-UI icons

function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        py: 8,
        textAlign: 'center',
      }}
    >
      <img
        src="/static/images/avatar/fau-logo.png"  
        alt="School Logo"
        style={{ width: 100, height: 'auto' }}
      />
      <Typography variant="body2" color="text.secondary" gutterBottom>
        2024 FAU Capstone Project
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          width: '100%',
        }}
      >
        <IconButton
          color="inherit"
          href="https://github.com/TLodosDurak/wildlife-camera-mern-stack" 
          aria-label="GitHub"
        >
          <GitHubIcon />
        </IconButton>
      </Box>
      <Typography variant="body2" color="text.secondary">
        Privacy Policy • Terms of Service
      </Typography>
    </Container>
  );
}

export default Footer;
