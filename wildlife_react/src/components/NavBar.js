import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function NavBar() {
  return (
    <AppBar position="static" sx={{ flexGrow: 1 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Wildlife Media Gallery
        </Typography>
        <Button color="inherit">Dashboard</Button>
        {/* Add more navigation buttons as needed */}
      </Toolbar>
    </AppBar>
  );
}
