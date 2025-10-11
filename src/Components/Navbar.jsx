import React, { useState } from 'react';
import { Box, Grid, IconButton, Drawer, List, ListItem, ListItemText, Typography, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const menuItems = ['About', 'Projects', 'Skills', 'Contact'];

  return (
    <>
      <Box
        className="navbar"
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1100,
          backgroundColor: '#f5f5f5',
          color: '#111',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        <Grid container alignItems="center" justifyContent="space-between" px={2} py={1}>
          {/* Logo */}
          <Grid item>
            <Typography
              component="a"
              href="#home"
              sx={{
                textDecoration: 'none',
                color: 'inherit',
                fontWeight: 'bold',
                fontSize: '1.5rem',
              }}
            >
              Gabriel Sam Raj
            </Typography>
          </Grid>

          {/* Desktop Menu */}
          <Grid item display={{ xs: 'none', md: 'flex' }}>
            <Stack direction="row" spacing={3} alignItems="center">
              {menuItems.map((item) => (
                <Typography
                  key={item}
                  component="a"
                  href={`#${item.toLowerCase()}`}
                  sx={{
                    color: 'inherit',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    '&:hover': { color: '#1976d2' },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Stack>
          </Grid>

          {/* Mobile Menu Button */}
          <Grid item display={{ xs: 'block', md: 'none' }}>
            <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: 'inherit' }}>
              <MenuIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Box>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250, padding: 2 }}>
          <Typography variant="h6" mb={2}>
            Navigation
          </Typography>
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                component="a"
                href={`#${item.toLowerCase()}`}
                key={item}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
