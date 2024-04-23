import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import VisibilityIcon from '@mui/icons-material/Visibility'; // Icon for Detection Capability
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull'; // Icon for Power Management
import CloudUploadIcon from '@mui/icons-material/CloudUpload'; // Icon for Data Transmission

const items = [
  {
    icon: <VisibilityIcon />,
    title: 'Advanced Detection',
    description: 'Utilizes dual detection systems combining passive infrared sensors and image processing for accurate wildlife activity monitoring.',
    image: 'url("/static/images/features/detection-light.png")'
  },
  {
    icon: <BatteryChargingFullIcon />,
    title: 'Energy Efficient',
    description: 'Incorporates solar-powered energy solutions with effective power management to ensure long operational periods in remote locations.',
    image: 'url("/static/images/features/energy-light.png")'
  },
  {
    icon: <CloudUploadIcon />,
    title: 'Reliable Data Transmission',
    description: 'Employs Delay Tolerant Networking (DTN) for efficient and reliable data transmission even in disrupted network conditions.',
    image: 'url("/static/images/features/data-light.png")'
  },
];

const Features = React.forwardRef((props, ref) => {  // Here we use forwardRef to pass the ref
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  
    const handleItemClick = (index) => {
      setSelectedItemIndex(index);
    };

  return (
    <Container ref={ref} id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Typography component="h2" variant="h4" color="text.primary">
            Smart Camera Features
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: { xs: 2, sm: 4 } }}>
            Explore the innovative features of our Smart Wildlife Monitoring Camera, designed to revolutionize wildlife research in remote areas.
          </Typography>
          <Stack direction="column" justifyContent="center" alignItems="flex-start" spacing={2} sx={{ width: '100%' }}>
            {items.map(({ icon, title, description }, index) => (
              <Card
                key={index}
                variant="outlined"
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={{
                  p: 3,
                  height: 'fit-content',
                  width: '100%',
                  backgroundColor: selectedItemIndex === index ? 'action.selected' : undefined,
                  borderColor: 'grey.200'
                }}
              >
                <Box sx={{ width: '100%', display: 'flex', textAlign: 'left', flexDirection: 'row', alignItems: 'center', gap: 2.5 }}>
                  <Box sx={{ color: selectedItemIndex === index ? 'primary.main' : 'grey.300' }}>
                    {icon}
                  </Box>
                  <Box sx={{ textTransform: 'none' }}>
                    <Typography color="text.primary" variant="body2" fontWeight="bold">
                      {title}
                    </Typography>
                    <Typography color="text.secondary" variant="body2" sx={{ my: 0.5 }}>
                      {description}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', width: '100%' }}>
          <Card variant="outlined" sx={{ height: '100%', width: '100%', pointerEvents: 'none' }}>
            <Box sx={{ m: 'auto', width: 420, height: 500, backgroundSize: 'contain', backgroundImage: items[selectedItemIndex].image }} />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
});

export default Features;
