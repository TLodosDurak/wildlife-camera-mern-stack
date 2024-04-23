import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import VisibilityIcon from '@mui/icons-material/Visibility'; // Icon for Advanced Detection
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull'; // Icon for Energy Efficiency
import CloudUploadIcon from '@mui/icons-material/CloudUpload'; // Icon for Reliable Data Transmission
import ParkIcon from '@mui/icons-material/Park'; // Replacement for EcoIcon
import SecurityIcon from '@mui/icons-material/Security'; // Icon for Data Security
import BuildCircleIcon from '@mui/icons-material/BuildCircle'; // Icon for Durability
import { useTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';


const items = [
  {
    icon: <VisibilityIcon />,
    title: 'Advanced Detection',
    description:
      'Dual detection systems using both passive infrared sensors and image processing technology for efficient wildlife monitoring.',
  },
  {
    icon: <BatteryChargingFullIcon />,
    title: 'Energy Efficiency',
    description:
      'Solar-powered and energy-efficient design ensures long operational periods in remote locations without frequent maintenance.',
  },
  {
    icon: <CloudUploadIcon />,
    title: 'Reliable Data Transmission',
    description:
      'Utilizes Delay Tolerant Networking (DTN) to ensure data integrity and timely delivery even in disrupted network conditions.',
  },
  {
    icon: <ParkIcon />,
    title: 'Environmental Sustainability',
    description:
      'Designed with environmental sustainability in mind, minimizing the ecological footprint and promoting conservation.',
  },
  {
    icon: <SecurityIcon />,
    title: 'Data Security',
    description:
      'Employs advanced security protocols to protect sensitive data collected during wildlife monitoring.',
  },
  {
    icon: <BuildCircleIcon />,
    title: 'Built to Last',
    description:
      'Robust construction and weather-resistant materials allow durable deployment in various environmental conditions.',
  },
];

export default function Highlights() {
  const theme = useTheme();
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        background: `linear-gradient(180deg, ${green[300]} 60%, #ffffff 90%)`, // Green gradient background
      }}
    >
      <Container>
        <Typography component="h2" variant="h4" color="text.primary" gutterBottom>
          Project Highlights
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          Discover the innovative features of our Smart Wildlife Monitoring Camera, designed to advance wildlife conservation efforts.
        </Typography>
        <Grid container spacing={2} sx={{ rowGap: 6 }}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  p: 3,
                  height: '100%',
                  bgcolor: 'rgba(255, 255, 255, 0.8)',
                  boxShadow: 1,
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 2,
                  },
                }}
              >
                <Box color={theme.palette.success.dark} sx={{ fontSize: 40, mb: 1 }}>{item.icon}</Box>
                <Typography variant="h6" component="div" sx={{ fontWeight: 'medium' }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
