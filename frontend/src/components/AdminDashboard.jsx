import React, { useState, useEffect } from 'react';
import { Typography, Paper, Grid } from '@mui/material';

const AdminDashboard = () => {
  // Mock data for active users, codes run, and languages used
  const [activeUsers, setActiveUsers] = useState(0);
  const [codesRunByUser, setCodesRunByUser] = useState({});
  const [languagesUsedByUser, setLanguagesUsedByUser] = useState({});

  // Mock API call to fetch data
  useEffect(() => {
    // Simulating API call to fetch data
    // Replace with actual API call in your application
    const fetchData = async () => {
      // Mock data for active users count
      setActiveUsers(10);

      // Mock data for codes run by user
      const mockCodesRunByUser = {
        user1: 20,
        user2: 15,
        user3: 25,
      };
      setCodesRunByUser(mockCodesRunByUser);

      // Mock data for languages used by user
      const mockLanguagesUsedByUser = {
        user1: ['JavaScript', 'Python'],
        user2: ['JavaScript', 'Java'],
        user3: ['JavaScript', 'HTML/CSS'],
      };
      setLanguagesUsedByUser(mockLanguagesUsedByUser);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: '1rem', textAlign: 'center' }}>
            <Typography variant="h6">Active Users</Typography>
            <Typography variant="h4" style={{ marginTop: '1rem' }}>
              {activeUsers}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: '1rem', textAlign: 'center' }}>
            <Typography variant="h6">Codes Run by User</Typography>
            <div>
              {Object.entries(codesRunByUser).map(([user, codes]) => (
                <div key={user}>
                  <Typography variant="body1">{`${user}: ${codes}`}</Typography>
                </div>
              ))}
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Paper elevation={3} style={{ padding: '1rem', textAlign: 'center' }}>
            <Typography variant="h6">Languages Used by User</Typography>
            <div>
              {Object.entries(languagesUsedByUser).map(([user, languages]) => (
                <div key={user}>
                  <Typography variant="body1">{`${user}: ${languages.join(', ')}`}</Typography>
                </div>
              ))}
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminDashboard;
