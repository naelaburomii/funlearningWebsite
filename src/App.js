import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import HomePage from './HomePage';
import LoginPageStudent from './Student/LoginPageStudent';
import SignUp from "./Student/SignUp";
import HomeStudent from "./Student/HomeStudent";
/*  <Route path="/SignUp" element={<SignUp />} />*/

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/HomeStudent" element={<HomeStudent/>} />
          <Route path="/HomeStudent/LoginPageStudent" element={<LoginPageStudent />} />
          <Route path="/HomeStudent/SignUp" element={<SignUp />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
