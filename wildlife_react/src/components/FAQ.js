import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container
      id="faq"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        color="text.primary"
        gutterBottom
      >
        Frequently Asked Questions
      </Typography>
      <Box sx={{ width: '100%' }}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
          <Typography><strong>How long does the battery last on a full charge?</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The device operates for 12 hours on a full battery charge. The integrated solar panel can extend the battery life by a few hours under suitable sunlight conditions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
          <Typography><strong>How does the camera handle different weather conditions?</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our cameras are built to withstand various weather conditions, featuring weather-resistant cases and components suitable for rain, snow, and extreme temperatures.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-content" id="panel3-header">
          <Typography><strong>What are the pricing details for the different models?</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The Camera Pi0 is priced at $135, the Camera Pi5 with AI capabilities costs $195, and the Carrier Node is available for $80.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4-content" id="panel4-header">
          <Typography><strong>How is data transmitted from the camera to the user?</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Data is collected by the Camera and sent to the Carrier Node via Bluetooth. The Carrier Node then uploads the data to a central database, allowing users to access the information through our website.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
    </Container>
  );
}
