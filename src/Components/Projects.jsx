import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import web from '../Assests/E-Comm.png';
import task from '../Assests/Task-Manager.png';

const Projects = () => {
  const data = [
    { 
      title: "E-Commerce App", 
      desc:  "React, Firebase Realtime DB, MUI",  
      img: web,
      link: "https://e-cart-by-gabriel.web.app/"
    },
    { 
      title: "Daily Task Manager", 
      desc: "React, Firebase Realtime DB, MUI", 
      img: task,
      link: "https://task-manager-by-sam.web.app/"
    },
  ];

  return (
    <Box id="projects" sx={{ py: 10 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography 
          variant="h4"
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            mb: { xs: 3, md: 5 },
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}
        >
          Projects
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {data.map((proj, idx) => (
          <Grid item key={idx} xs={12} sm={6} md={4} lg={4}>
            <a 
              href={proj.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ textDecoration: 'none' }}
            >
              <Card 
                sx={{ 
                  height: 310,              // Fixed height for uniformity
                  width: 220,               // Fixed width for uniformity
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  mx: 'auto',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.05)' }
                }}
              >
                <CardMedia
                  component="img"
                  image={proj.img}
                  alt={proj.title}
                  sx={{
                    height: "200px",           // Fixed image height
                    objectFit: 'cover',    // Ensures consistent crop/fit
                  }}
                />
                <CardContent>
                  <Typography variant="h6" component="div" gutterBottom align="center">
                    {proj.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" align="center">
                    {proj.desc}
                  </Typography>
                </CardContent>
              </Card>
            </a>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
