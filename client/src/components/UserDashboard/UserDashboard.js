// src/components/UserDashboard/UserDashboard.js
import React from 'react';
import UserHeader from './UserHeader';
import UserSidebar from './UserSidebar';
import UserRecords from './UserRecords';
import UserNotifications from './UserNotifications';
import './UserDashboard.css';

const UserDashboard = () => {
  return (
    <div className="user-dashboard">
      <UserSidebar />
      <div className="dashboard-content">
        <UserHeader />
        <main className="dashboard-main">
          <section className="dashboard-section">
            <UserRecords />
          </section>
          <section className="dashboard-section">
            <UserNotifications />
          </section>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
