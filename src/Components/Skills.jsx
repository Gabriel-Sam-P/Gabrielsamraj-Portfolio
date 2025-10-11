import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import HtmlIcon from '@mui/icons-material/Language';
import CssIcon from '@mui/icons-material/Style';
import JavascriptIcon from '@mui/icons-material/Code';
import ReactIcon from '@mui/icons-material/IntegrationInstructions';
import GitHubIcon from '@mui/icons-material/GitHub';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: <HtmlIcon sx={{ fontSize: 40, color: '#e34c26' }} /> },
    { name: 'CSS', icon: <CssIcon sx={{ fontSize: 40, color: '#264de4' }} /> },
    { name: 'JavaScript', icon: <JavascriptIcon sx={{ fontSize: 40, color: '#f7df1e' }} /> },
    { name: 'React', icon: <ReactIcon sx={{ fontSize: 40, color: '#61dafb' }} /> },
    { name: 'Git', icon: <GitHubIcon sx={{ fontSize: 40, color: '#000' }} /> },
  ];

  return (
    <section id="skills" style={{
          minHeight: '250px',
          px: { xs: 2, sm: 4, md: 8 },
          py: { xs: 4, sm: 6, md: 8 }}}
    >
      <Box
        sx={{

          display: 'flex',
          flexDirection: 'column',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Heading */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: { xs: 3, md: 5 },
            textTransform: 'uppercase',
            letterSpacing: '2px',
            color: 'black',
          }}
        >
          Skills
        </Typography>

        {/* Skills Grid */}
        <Grid container spacing={6} justifyContent= "center">
          {skills.map((skill, index) => (
            <Grid size= {{xs:12, sm:6, md:4, lg:2}} key={index}>
              <Paper
                elevation={6}
                sx={{
                  padding: '15px',
                  height: '100px',

                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  borderRadius: '16px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.5)',
                  },
                }}
              >
                {skill.icon}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    marginBottom: '8px',
                    color: '#007bff',
                    marginTop: '10px',
                  }}
                >
                  {skill.name}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
};

export default Skills;
