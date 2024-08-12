// src/components/UserDashboard/UserRecords.js
import React from 'react';
import { Button } from '@mui/material';
import './UserRecords.css';

const UserRecords = () => {
  return (
    <div className="user-records">
      <h2>Your Step to Step Guide to Reporting Corruption</h2>
      <div className="guide-cards">
        <div className="guide-card">
          <h3>SPEAK UP</h3>
          <p>Document the issue using our friendly app. Add photos, videos, or location data to strengthen your report.</p>
        </div>
        <div className="guide-card">
          <h3>STAY SAFE</h3>
          <p>Rest easy knowing your report is encrypted and your identity is protected. We prioritize your safety and privacy.</p>
        </div>
        <div className="guide-card">
          <h3>SEE CHANGE</h3>
          <p>Track your report’s progress and witness its impact. Be part of the solution as authorities take action.</p>
        </div>
      </div>
      <Button variant="contained" color="primary" className="report-button">REPORT NOW</Button>
      <a href="#" className="need-help">Need help?</a>
    </div>
  );
};

export default UserRecords;
