import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50', // A shade of green
    },
    secondary: {
      main: '#8BC34A', // Another shade of green
    },
    // You can also customize other theme aspects like typography
  },
  // Add other theme customizations here
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
