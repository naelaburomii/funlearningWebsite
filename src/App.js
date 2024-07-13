import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import HomePage from './HomePage';
import LoginPageStudent from './Student/LoginPageStudent';
import SignUp from "./Student/SignUp";
import HomeStudent from "./Student/HomeStudent";
<<<<<<< HEAD
/*  <Route path="/SignUp" element={<SignUp />} />*/
=======
import HomeParent from "./Parent/HomeParent";
import LoginPageParent from "./Parent/LoginPageParent";
import SignUpParent from "./Parent/SignUpParent";
import HomeTeacher from "./Teacher/HomeTeacher";
import LoginPageTeacher from "./Teacher/LoginPageTeacher";
import SignUpTeacher from "./Teacher/SignUpTeacher";
import DashboardTeacher from "./Teacher/DashboardTeacher";
import DashboardStudent from "./Student/DashboardStudent"; // Create this component
import DashboardParent from "./Parent/DashboardParent"; // Create this component
>>>>>>> 692547d (Login and navigate to user Dashboard)

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<HomePage />} />
          <Route path="/HomeStudent" element={<HomeStudent/>} />
          <Route path="/HomeStudent/LoginPageStudent" element={<LoginPageStudent />} />
          <Route path="/HomeStudent/SignUp" element={<SignUp />} />
          
=======
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/HomeStudent" element={<HomeStudent/>} />
          <Route path="/HomeStudent/LoginPageStudent" element={<LoginPageStudent />} />
          <Route path="/HomeStudent/SignUp" element={<SignUp />} />
          <Route path="/HomeParent" element={<HomeParent/>} />
          <Route path="/HomeParent/LoginPageParent" element={<LoginPageParent />} />
          <Route path="/HomeParent/SignUpParent" element={<SignUpParent />} />
          <Route path="/HomeTeacher" element={<HomeTeacher/>} />
          <Route path="/HomeTeacher/LoginPageTeacher" element={<LoginPageTeacher/>} />
          <Route path="/HomeTeacher/SignUpTeacher" element={<SignUpTeacher/>} />
          <Route path="/TeacherDashboard" element={<DashboardTeacher />} />
          <Route path="/StudentDashboard" element={<DashboardStudent />} /> {/* Add this route */}
          <Route path="/ParentDashboard" element={<DashboardParent />} /> {/* Add this route */}
>>>>>>> 692547d (Login and navigate to user Dashboard)
        </Routes>
      </div>
    </Router>
  );
}

export default App;
