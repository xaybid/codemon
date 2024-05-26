import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = ({ authenticated, setAuthenticated }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setAuthenticated(false);
    navigate('/login');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {authenticated && location.pathname === '/editor' ? (
          <Button
            color="error"
            variant="contained"
            style={{ marginLeft: 'auto' }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        ) : (
          <>
            <Button color="inherit" style={{ margin: 'auto' }} component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" style={{ margin: 'auto' }} component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" style={{ margin: 'auto' }} component={Link} to="/signup">
              Signup
            </Button>
            <Button color="inherit" style={{ margin: 'auto' }} component={Link} to="/adminlogin">
              Login as Admin
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
