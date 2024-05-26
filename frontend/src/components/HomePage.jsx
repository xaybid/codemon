import React from 'react';
import { Typography, Container, Box, CssBaseline } from '@mui/material';
import Header from './Header';
import { Hero } from '../assets/images'

const HomePage = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Box sx={{ 
        backgroundImage: `url(${Hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px', // Adjust the height as per your design
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white', // Text color on top of the image
      }}>
        <Container>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to the Homepage
          </Typography>
          <Typography variant="body1">
            This is a simple homepage with a navigation bar using Material-UI.
          </Typography>
        </Container>
      </Box>

      <Container>
        <Box my={4}>
          <Typography variant="h5" component="h2" gutterBottom>
            More Content Below
          </Typography>
          <Typography variant="body1">
            You can add more content here, such as additional text, images, or any other components.
          </Typography>
        </Box>
      </Container>
    </>
  );
};
  
export default HomePage;
