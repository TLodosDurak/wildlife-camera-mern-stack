import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const teamMembers = [
    {
      avatar: '/static/images/avatar/SeanDenes.PNG',
      name: 'Sean Denes',
      occupation: 'Bluetooth & Data Transfer Specialist',
      testimonial:
        'As the specialist in Bluetooth and High Data-rate Transmission Protocol, I ensured robust data transfer capabilities for the project, alongside contributing to full-stack website development.',
    },
    {
      avatar: '/static/images/avatar/TemelDurak.png',
      name: 'Temel Lodos Durak',
      occupation: 'Project Manager',
      testimonial:
        'I led the project, managing both hardware and software aspects of the Camera Module, carrier node, and full-stack website development, ensuring seamless integration and functionality.',
    },
    {
      avatar: '/static/images/avatar/RaulMendy.png',
      name: 'Raul Mendy',
      occupation: 'AI & Camera Module Lead',
      testimonial:
        'I was responsible for integrating AI capabilities with the Pi 5 Camera Module, enhancing our system’s ability to efficiently detect and analyze wildlife through advanced image processing.',
    },
    {
      avatar: '/static/images/avatar/EliasFatta.jpg',
      name: 'Elias Fatta',
      occupation: 'Power Systems Engineer',
      testimonial:
        'I led the development of sustainable energy solutions, focusing on solar power systems to ensure our equipment remains powered in remote and challenging environments.',
    },
    {
      avatar: '/static/images/avatar/YouthamIndraws.jpg',
      name: 'Youtham Indraws',
      occupation: 'Design Engineer',
      testimonial:
        'I was in charge of designing the carrier node and the protective casing for the Pi 5 Camera, key in safeguarding our technology against environmental challenges.',
    },
  ];

export default function TeamMembers() {
  return (
    <Container
      id="team-members"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Typography component="h2" variant="h4" color="text.primary" gutterBottom>
        Meet Our Team
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Get to know the brilliant minds behind our Smart Wildlife Monitoring Camera project.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '90%', // Makes all cards the same height
                p: 2,
              }}
            >
              <CardHeader
                avatar={<Avatar alt={member.name} src={member.avatar} />}
                title={member.name}
                subheader={member.occupation}
              /> 
              <CardContent sx={{ flexGrow: 1 }}>  
                <Typography variant="body2" color="text.secondary">
                  {member.testimonial}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
