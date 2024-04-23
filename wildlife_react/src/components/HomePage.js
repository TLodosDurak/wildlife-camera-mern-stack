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
    
  </>
  );
}

export default HomePage;
