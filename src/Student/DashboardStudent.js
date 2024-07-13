import React from 'react';
import './DashboardStudent.css';

function DashboardStudent() {
  return (
    <div className="dashboard-container">
      <h1>Student Dashboard</h1>
      <p>Welcome to the student dashboard!</p>
      
      <div className="dashboard-section">
        <h2>Upcoming Events</h2>
        <ul>
          <li>Exam Preparation - July 20, 2024</li>
          <li>School Trip - July 25, 2024</li>
          <li>Sports Day - July 30, 2024</li>
        </ul>
      </div>
      
      <div className="dashboard-section">
        <h2>Important Notices</h2>
        <p>Please check your assignments regularly and contact your teacher if you have any questions.</p>
      </div>
    </div>
  );
}

export default DashboardStudent;
