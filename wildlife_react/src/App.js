// In App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Gallery from './components/Gallery'; // This will act as your Dashboard for now
import HomePage from './components/HomePage'; // You'll create this component
import LoginPage from './components/LoginPage'; // You'll create this component
import SignupPage from './components/SignupPage'; // You'll create this component
import RegisterDevices from './components/RegisterDevices'; // You'll create this 
import LearnMore from './components/LearnMore'; // You'll create this component


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<Gallery />} />
          <Route path="/learn-more" element={<LearnMore />} />
          <Route path="/register-devices" element={<RegisterDevices />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
