import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  let navigate = useNavigate();

  // Function to handle logout (for example)
  const handleLogout = () => {
    // Perform logout operations here
    console.log('Logout');
    // Redirect to home or login page
    navigate('/');
  };

  return (
    <AppBar position="static" sx={{ flexGrow: 1 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }} onClick={() => navigate('/')}>
          Wildlife Media Gallery
        </Typography>

        {/* Dashboard Button with outline */}
        <Button variant="outlined" color="inherit" sx={{ margin: '0 8px' }} onClick={() => navigate('/dashboard')}>
          Dashboard
        </Button>

        {/* Register Devices Button with outline */}
        <Button variant="outlined" color="inherit" sx={{ margin: '0 8px' }} onClick={() => navigate('/register-devices')}>
          Register Devices
        </Button>

        {/* Example Logout Button - Replace with actual functionality and added outline */}
        <Button variant="outlined" color="inherit" sx={{ margin: '0 8px' }} onClick={handleLogout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}
