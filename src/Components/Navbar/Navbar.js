import React from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logo from '../../Assets/logo-black.png'
import searchicon from '../../Assets/search-b.png'

const Navbar = () => {
 return (
   
     <div className="navbar">
      <img src={logo} alt="" className='logo'/>
      <ul>
        <li><Link to="./HomePage">ראשי</Link></li>
        <li><Link to="/HomeStudent">תלמידים</Link></li>
        <li>מורים</li>
        <li>הורים</li>
        <li>אודות</li>
      </ul>

      <div className="search-box">
        <input type="text" placeholder='Search'/>
        <img src={searchicon} alt=""/>
      </div>

     </div>
      

 );
};

export default Navbar;
