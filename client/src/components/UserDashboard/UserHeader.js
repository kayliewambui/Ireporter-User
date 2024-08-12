// src/components/UserDashboard/UserHeader.js
import React from 'react';
import { Avatar, IconButton, Typography } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './UserHeader.css';

const UserHeader = () => {
  return (
    <header className="user-header">
      <div className="header-left">
        <Typography variant="h4">Dashboard</Typography>
        <Typography variant="subtitle1">Welcome back, Kaylie</Typography>
      </div>
      <div className="header-right">
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <div className="user-info">
          <Avatar alt="Kaylie Wambui" src="/path/to/userImage.png" />
          <div className="user-details">
            <Typography variant="body1" className="user-id">Work ID: 12345</Typography>
            <Typography variant="body2" className="user-email">kaylie.wambui@ireporter.com</Typography>
          </div>
        </div>
      </div>
    </header>
  );
};

export default UserHeader;
