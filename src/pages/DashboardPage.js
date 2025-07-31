// src/pages/DashboardPage.js
import React from 'react';
import '../styles/DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <h2>Admin Dashboard</h2>
      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Users</h3>
          <p>47</p>
        </div>
        <div className="card">
          <h3>New Users Today</h3>
          <p>3</p>
        </div>
        <div className="card">
          <h3>System Status</h3>
          <p>✅ All Systems Operational</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
