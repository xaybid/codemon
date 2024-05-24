import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, CssBaseline } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          {/* <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            MyApp
          </Typography> */}
          <Button color="inherit" component={Link} to="/home">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
          <Button color="inherit" component={Link} to="/signup">
            Signup
          </Button>
          <Button color="inherit" component={Link} to="/adminlogin"> {/* Update this line */}
            Login as Admin
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to the Homepage
          </Typography>
          <Typography variant="body1">
            This is a simple homepage with a navigation bar using Material-UI.
          </Typography>
        </Box>
      </Container>
    </>
  )};export default HomePage;
