import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Wallpaper from '../assets/images/Wallpaper.jpg'; // Adjust the import according to your file structure

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

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isLoginMode, setIsLoginMode] = useState(true);

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

    // Hardcoded credentials for admin
    const adminUsername = 'admin';
    const adminPassword = 'password';

    if (isLoginMode) {
      // Login logic
      if (username === adminUsername && password === adminPassword) {
        // Successful login
        setError('');
        onLogin(); // Call onLogin prop to handle successful login
      } else {
        // Failed login
        setError('Invalid username or password');
      }
    } else {
      // Signup logic (here, you could handle the signup or just display a message)
      setError('Signup is not supported with hardcoded credentials.');
    }
  };

  const handleSwitchMode = () => {
    setIsLoginMode(!isLoginMode);
    setUsername('');
    setPassword('');
    setName('');
    setError('');
  };

  return (
    <RootContainer>
      <Container maxWidth="xs">
        <FormContainer>
          <Typography variant="h5" component="h1" gutterBottom>
            {isLoginMode ? 'Sign in' : 'Sign up'}
          </Typography>
          {error && <Typography color="error">{error}</Typography>}
          <form onSubmit={handleSubmit}>
            {!isLoginMode && (
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus={!isLoginMode}
                value={name}
                onChange={handleNameChange}
              />
            )}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus={isLoginMode}
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
              {isLoginMode ? 'Sign In' : 'Sign Up'}
            </Button>
            <Button
              fullWidth
              color="primary"
              onClick={handleSwitchMode}
              style={{ marginTop: '8px' }}
            >
              {isLoginMode ? 'Create An Account! Sign up now' : 'Already Have An Account? Sign In'}
            </Button>
          </form>
        </FormContainer>
      </Container>
    </RootContainer>
  );
};

export default LoginPage;
