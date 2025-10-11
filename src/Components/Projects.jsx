import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import web from '../Assests/E-Comm.png';
import task from '../Assests/Task-Manager.png'; // <-- add an image for your task manager project

const Projects = () => {
  const data = [
    { 
      title: "E-Commerce App", 
      desc: "React, Firebase, MUI", 
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
      <Box className="container" sx={{ textAlign: 'center', mb: 6 }}>
        <Typography 
          variant="h4"
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: { xs: '30px', md: '50px' },
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}
        >
          Projects
        </Typography>
      </Box>

      <Grid container spacing={3} justifyContent="center">
        {data.map((proj, idx) => (
          <Grid item key={idx} xs={12} sm={6} md={4} lg={5}>
            <a 
              href={proj.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ textDecoration: 'none' }}
            >
              <Card 
                sx={{ 
                  height: '100%',
                  transition: 'transform 0.3s', 
                  '&:hover': { transform: 'scale(1.05)' }
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={proj.img}
                  alt={proj.title}
                />
                <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    {proj.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
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
