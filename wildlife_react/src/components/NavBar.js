import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '../supabaseClient';  // Ensure the path is correct

export default function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    updateAuthStatus();

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      updateAuthStatus(session);
    });

    return () => {
      authListener.subscription.unsubscribe(); // Proper way to unsubscribe
    };
  }, []);

  const updateAuthStatus = (session = supabase.auth.getSession()) => {
    setIsLoggedIn(session ? true : false);
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log('Error logging out:', error.message);
    } else {
      navigate('/');
    }
  };

  const handleTitleClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <AppBar position="fixed" sx={{ flexGrow: 1, top: 0, width: '100%', zIndex: 1100}}> 
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }} onClick={handleTitleClick}>
          Wildlife Media Gallery
        </Typography>

        {isLoggedIn ? (
          <>
            <Button variant="outlined" color="inherit" sx={{ margin: '0 8px' }} onClick={() => navigate('/dashboard')}>
              Dashboard
            </Button>
            <Button variant="outlined" color="inherit" sx={{ margin: '0 8px' }} onClick={() => navigate('/register-devices')}>
              Register Devices
            </Button>
            <Button variant="outlined" color="inherit" sx={{ margin: '0 8px' }} onClick={handleLogout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button variant="outlined" color="inherit" sx={{ margin: '0 8px' }} onClick={() => navigate('/login')}>
              Login
            </Button>
            <Button variant="outlined" color="inherit" sx={{ margin: '0 8px' }} onClick={() => navigate('/signup')}>
              Sign Up
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
