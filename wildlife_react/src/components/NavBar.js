import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


export default function NavBar() {
  let navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ flexGrow: 1 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }} onClick={() => navigate('/')}>
          Wildlife Media Gallery
        </Typography>
        <Button color="inherit" onClick={() => navigate('/dashboard')}>Dashboard</Button>
        {/* Add more navigation buttons as needed */}
      </Toolbar>
    </AppBar>
  );
}
