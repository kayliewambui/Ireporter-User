// src/components/UserDashboard/UserDashboard.js
import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import UserHeader from './UserHeader';
import UserSidebar from './UserSidebar';
import UserRecords from './UserRecords';
import UserNotifications from './UserNotifications';

const UserDashboard = () => {
  return (
    <Grid container>
      <UserSidebar />
      <Grid item xs={12} md={10}>
        <UserHeader />
        <Box sx={{ padding: '20px' }}>
          <Typography variant="h4" gutterBottom>
            Dashboard
          </Typography>
          <Box sx={{ marginTop: '20px' }}>
            <Typography variant="h5">Your Step by Step Guide to Reporting Corruption</Typography>
            <Grid container spacing={2} sx={{ marginTop: '10px' }}>
              <Grid item xs={12} md={4}>
                <Button variant="contained" color="primary" fullWidth>
                  SPEAK UP
                </Button>
                <Typography>
                  Document the issue using our friendly app. Add photos, videos, or location data to strengthen your report.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Button variant="contained" color="secondary" fullWidth>
                  STAY SAFE
                </Button>
                <Typography>
                  Rest easy knowing your report is encrypted and your identity is protected. We prioritize your safety and privacy.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Button variant="contained" color="warning" fullWidth>
                  SEE CHANGE
                </Button>
                <Typography>
                  Track your report’s progress and witness its impact. Be part of the solution as authorities take action.
                </Typography>
              </Grid>
            </Grid>
            <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
              <Button variant="contained" color="warning" size="large">
                REPORT NOW
              </Button>
              <Typography variant="body2" sx={{ marginTop: '10px' }}>
                Need help?
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default UserDashboard;
