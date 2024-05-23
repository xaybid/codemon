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

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      setIsAuthenticated(true);
      navigate('/');
    } else {
      fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setIsAuthenticated(true);
          navigate('/');
        } else {
          setError(data.msg);
        }
      })
      .catch(() => {
        setError('Something went wrong');
      });
    }
  };

  return (
    <RootContainer>
      <Container maxWidth="xs">
        <FormContainer>
          <Typography variant="h5" component="h1" gutterBottom>
            Sign in
          </Typography>
          {error && <Typography color="error">{error}</Typography>}
          <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
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
              Sign In
            </Button>
            <Button
              fullWidth
              color="primary"
              onClick={() => navigate('/signup')}
              style={{ marginTop: '8px' }}
            >
              Create An Account! Sign up now
            </Button>
          </form>
        </FormContainer>
      </Container>
    </RootContainer>
  );
};

export default Login;
