import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Img from '../Assests/Gabriel.jpg';

const About = () => {
  return (
    <section
      id="about"
    >
      <Box>
        {/* Heading */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: { xs: 3, md: 6 },
            textTransform: "uppercase",
            letterSpacing: "2px",
            color: "black",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          }}
        >
          About Me
        </Typography>

        <Grid
          container
          spacing={4}
          direction={{ xs: "column-reverse", md: "row" }}
          alignItems="center"
          justifyContent="center"
        >
          {/* Left Text Content */}
          <Grid size= {{xs:12, md:6}}>
            <Typography
              paragraph
              sx={{ color: "black", fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" } }}
            >
              <strong>My name is Gabriel Samraj.</strong> I am a budding Front-End Developer looking
              for an opportunity to prove my skills and contribute to a growing organization.
            </Typography>
            <Typography paragraph sx={{ color: "black" }}>
              I have completed my Bachelor's Degree in Mechanical Engineering at{" "}
              <strong>DMI Engineering College</strong>, and a Diploma in Mechanical at{" "}
              <strong>Pastor Lenssen Polytechnic College</strong>.
            </Typography>
            <Typography paragraph sx={{ color: "black" }}>
              I’m currently enhancing my skills through a <strong>Front-End Developer (React)</strong>{" "}
              course at <strong>Karka Software Academy, Nagercoil</strong>.
            </Typography>
            <Typography paragraph sx={{ color: "black" }}>
              I have designed and built <strong>responsive web layouts</strong> using Bootstrap,
              Material UI, and CSS media queries. I enjoy solving problems and collaborating with
              teams.
            </Typography>
            <Typography paragraph sx={{ color: "black" }}>
              📞 <strong>Phone:</strong> +91-968928626
              <br />
              ✉️ <strong>Email:</strong> p.gabrielsamraj@gmail.com
              <br />
            </Typography>
          </Grid>

          {/* Right Image */}
          <Grid size= {{xs:12, md:4}} sx={{ textAlign: { xs: "center", md: "right" } }}>
            <Box
              component="img"
              src={Img}
              alt="Gabriel Samraj"
              sx={{
                width: { xs: "220px", sm: "280px", md: "70%", lg: "60%" },
                maxHeight: { xs: "250px", md: "300px" },
                objectFit: "cover",
                borderRadius: "16px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                margin: { xs: "0 auto", md: "0" },
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default About;
