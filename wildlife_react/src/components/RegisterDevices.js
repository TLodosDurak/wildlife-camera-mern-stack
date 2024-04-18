import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient'; // Ensure supabase client is correctly initialized

const defaultTheme = createTheme();

export default function RegisterDevices() {
  const [macAddress, setMacAddress] = useState('');
  const [macError, setMacError] = useState(false);  // State to manage MAC address input errors
  let navigate = useNavigate();

  const handleRegister = async () => {
    if (!/^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/.test(macAddress)) {
      setMacError(true);
      return;
    }
    try {
      // Asynchronously get the session
      const { data: session, error: sessionError } = await supabase.auth.getSession();
  
      console.log("Session Data:", session); // Log the entire session object

      if (sessionError) {
        console.error('Error retrieving session:', sessionError.message);
        alert('Could not retrieve user session.');
        navigate('/login');
        return;
      }
      await new Promise(resolve => setTimeout(resolve, 2000));
  
      if (session && session.session.user) {
        const user_id = session.session.user.id;
        console.log("User ID:", user_id); // Debug: Ensure you have a user ID
        const { data, error } = await supabase
          .from('registered_devices')
          .insert([
            { mac_address: macAddress, user_uuid: user_id }
          ]);
  
        if (error) {
          console.error('Error registering device:', error.message);
          alert('Failed to register device.');
        } else {
          console.log('Device registered successfully', data);
          alert('Device registered successfully!');
          navigate('/dashboard'); // Redirect on success
        }
      } else {
        console.error('No active session or user found');
        alert('No active user session found. Please log in.');
        navigate('/login');
      }
    } catch (e) {
      console.error('An unexpected error occurred:', e.message);
      alert('An error occurred. Please try again.');
    }
  };
  
  
  

  const handleChange = (event) => {
    if (macError) setMacError(false);  // Reset error state when user modifies the input
    setMacAddress(event.target.value.toUpperCase()); // Ensure MAC address is in the correct format
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Register Device
          </Typography>
          <Box component="form" onSubmit={(e) => e.preventDefault()} sx={{ mt: 3 }}>
            <TextField
              required
              fullWidth
              id="mac-address"
              label="MAC Address"
              name="mac-address"
              autoComplete="mac-address"
              value={macAddress}
              onChange={handleChange}
              placeholder="D8:3A:DD:69:F6:E8"
              error={macError}
              helperText={macError ? "Invalid MAC address format" : ""}
              inputProps={{
                pattern: "[A-F0-9]{2}(:[A-F0-9]{2}){5}"
              }}
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleRegister}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
