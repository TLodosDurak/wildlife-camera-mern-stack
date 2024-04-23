import { createTheme } from '@mui/material/styles';
import { green, grey } from '@mui/material/colors';

// Enhanced green palette
const brand = {
  main: green[600], // A medium dark green
  light: green[400], // A lighter green
  dark: green[800], // A darker green for contrasts
  contrastText: '#ffffff', // White text for better readability on green backgrounds
};

// Create the theme instance with the green palette
const theme = createTheme({
  palette: {
    primary: brand,
    secondary: {
      main: green[500],
      light: green[300],
      dark: green[700],
      contrastText: '#ffffff',
    },
    error: {
      main: '#f44336',
    },
    background: {
      default: '#ffffff', // Main background color set to white
      paper: '#ffffff', // Paper elements background set to white
    },
    text: {
      primary: grey[900], // Dark grey for primary text
      secondary: grey[600], // Lighter grey for secondary text
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          border: `1px solid ${grey[300]}`, // Neutral border color
          '&:not(:last-child)': {
            borderBottom: 0,
          },
          '&:before': {
            display: 'none',
          },
          backgroundColor: '#ffffff', // Default background to white
          '&:hover, &:focus': {
            backgroundColor: green[200], // Change to light green on hover/focus
            boxShadow: `0 0 8px ${green[300]}`, // Add glow effect
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff', // Set background to white
          '&.Mui-expanded': {
            minHeight: 48,
          },
          '.MuiAccordionSummary-content.Mui-expanded': {
            margin: '12px 0',
          },
          '&:hover, &:focus': {
            backgroundColor: green[200], // Light green background on hover/focus
            boxShadow: `0 0 8px ${green[400]}`, // Glow effect
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff', // Set background to white
          padding: '0 16px 16px',
          '&:hover, &:focus': {
            backgroundColor: green[50], // Very light green on hover/focus
            boxShadow: `inset 0 0 8px ${green[200]}`, // Subtle inner glow effect
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff', // White background for cards
          '&:hover, &:focus': {
            backgroundColor: green[200], // Light green for hover/focus
            boxShadow: `0 0 12px ${green[400]}`, // Strong glow effect
          },
        },
      },
    },
    // Add more component overrides if necessary
  },
});

export default theme;
