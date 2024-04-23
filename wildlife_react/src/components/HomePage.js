// In components/HomePage.js
import React, { useRef } from 'react';
import HeroSection from './HeroSection';
import Features from './Features';
import TeamMembers from './TeamMembers';  // This was Testimonials, but renamed and repurposed
import Highlights from './Highlights';
import FAQ from './FAQ';
import Footer from './Footer';
import Divider from '@mui/material/Divider';

function HomePage() {
  const featuresRef = useRef(null);

  const handleLearnMoreClick = () => {
    if (featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <HeroSection onLearnMoreClick={handleLearnMoreClick} />
      <Divider />
      <Features ref={featuresRef} />
      <Divider />
      <TeamMembers />
      <Divider />
      <Highlights />
      <Divider />
      <FAQ />
      <Divider />
      <Footer />
    </>
  );
}

export default HomePage;
