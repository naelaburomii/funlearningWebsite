import React from 'react';
import './DashboardParent.css';

function DashboardParent() {
  return (
    <div className="dashboard-container">
      <h1>Parent Dashboard</h1>
      <p>Welcome to the parent dashboard!</p>
      
      <div className="dashboard-section">
        <h2>Upcoming Events</h2>
        <ul>
          <li>Parent-Teacher Meeting - July 20, 2024</li>
          <li>School Picnic - July 25, 2024</li>
          <li>Annual Day - July 30, 2024</li>
        </ul>
      </div>
      
      <div className="dashboard-section">
        <h2>Important Notices</h2>
        <p>Please review your child's progress regularly and contact the school if you have any questions.</p>
      </div>
    </div>
  );
}

export default DashboardParent;
