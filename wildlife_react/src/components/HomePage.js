// In components/HomePage.js
import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import HeroSection from './HeroSection';


function HomePage() {
  let navigate = useNavigate();

  return (
    <>
    <HeroSection />
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '20vh' }}>
      <Typography variant="h2" gutterBottom>Welcome</Typography>
      <Button variant="contained" color="primary" onClick={() => navigate('/login')} style={{ marginRight: '10px' }}>
        Login
      </Button>
      <Button variant="contained" color="secondary" onClick={() => navigate('/signup')}>
        Sign Up
      </Button>
    </Container>
  </>
  );
}

export default HomePage;
