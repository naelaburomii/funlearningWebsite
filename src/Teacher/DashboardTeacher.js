import React from 'react';
import './DashboardTeacher.css';

function DashboardTeacher() {
  return (
    <div className="dashboard-container">
      <h1>Teacher Dashboard</h1>
      <p>Welcome to the teacher dashboard!</p>
      
      <div className="dashboard-section">
        <h2>Upcoming Events</h2>
        <ul>
          <li>Meeting with Administration - July 20, 2024</li>
          <li>New Teacher Training - July 25, 2024</li>
          <li>Parent-Teacher Conference - July 30, 2024</li>
        </ul>
      </div>
      
      <div className="dashboard-section">
        <h2>Important Notices</h2>
        <p>Please ensure all class information is up-to-date. If you have any questions, contact the administration.</p>
      </div>
    </div>
  );
}

export default DashboardTeacher;
