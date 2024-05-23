import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Wallpaper } from '../assets/images';
import { useNavigate } from 'react-router-dom';

const RootContainer = styled('div')({
  backgroundImage: `url(${Wallpaper})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const FormContainer = styled('div')({
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  padding: '2rem',
  borderRadius: '8px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
});

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, username, password }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        navigate('/login');
      } else {
        setError(data.msg);
      }
    })
    .catch(() => {
      setError('Something went wrong');
    });
  };

  return (
    <RootContainer>
      <Container maxWidth="xs">
        <FormContainer>
          <Typography variant="h5" component="h1" gutterBottom>
            Sign up
          </Typography>
          {error && <Typography color="error">{error}</Typography>}
          <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              value={name}
              onChange={handleNameChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              value={username}
              onChange={handleUsernameChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handlePasswordChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginTop: '16px' }}
            >
              Sign Up
            </Button>
            <Button
              fullWidth
              color="primary"
              onClick={() => navigate('/login')}
              style={{ marginTop: '8px' }}
            >
              Already Have An Account? Sign In
            </Button>
          </form>
        </FormContainer>
      </Container>
    </RootContainer>
  );
};

export default Signup;
