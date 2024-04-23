// In App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Gallery from './components/Gallery'; 
import HomePage from './components/HomePage'; 
import LoginPage from './components/LoginPage'; 
import SignupPage from './components/SignupPage'; 
import RegisterDevices from './components/RegisterDevices'; 


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
          <Route path="/register-devices" element={<RegisterDevices />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
