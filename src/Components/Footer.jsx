import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = ({ darkMode }) => {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: 'center',
        padding: '20px 0',
        backgroundColor: darkMode ? '#111' : '#eee',
        color: darkMode ? '#fff' : '#000',
        marginTop: '40px',
      }}
    >
      <Typography variant="body2">
        © 2025 Gabriel Samraj. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
