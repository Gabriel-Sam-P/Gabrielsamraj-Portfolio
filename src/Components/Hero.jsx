import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "linear-gradient(135deg, #cce5ff, #f0f9ff)",
        py:{lg:1, md:5, sm:6, xs:6},
        px: 2, // padding x for small devices
        height: {
          xs: "70vh", // mobile
          sm: "80vh", // tablet
          md: "90vh", // laptop
          lg: "100vh", // large screen
        },
      }}
    >
      <Box>
        {/* Heading */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontSize: {
              xs: "2rem", // mobile
              sm: "2.5rem", // tablet
              md: "3rem", // laptop
              lg: "4rem", // large screen
            },
            background: "linear-gradient(90deg, #7928CA, #FF0080)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Hi, I'm Gabriel Sam Raj
        </Typography>

        {/* Subheading */}
        <Typography
          sx={{
            mt: 2,
            fontSize: {
              xs: "1.2rem",
              sm: "1.5rem",
              md: "2rem",
              lg: "2.5rem",
            },
            background: "linear-gradient(90deg, #FF0080, #FFCD1E)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Front-End Developer
        </Typography>

        {/* Download Button */}
        <Button
          variant="contained"
          href="/resume.pdf"
          download
          sx={{
            mt: 4,
            px: { xs: 3, sm: 4, md: 5 },
            py: { xs: 1, sm: 1.5 },
            fontSize: { xs: "0.8rem", sm: "1rem", md: "1.1rem" },
            borderRadius: 2,
            background: "linear-gradient(90deg, #7928CA, #FF0080)",
            textTransform: "none",
            "&:hover": {
              opacity: 0.9,
              background: "linear-gradient(90deg, #FF0080, #7928CA)",
            },
          }}
        >
          Download Resume
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
