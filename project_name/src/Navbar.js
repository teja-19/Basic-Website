import React from 'react';
import {  Link } from "react-router-dom";
import './navi.css';
const Navbar= () =>{
  return (
  <div>
    <ul>
    <li>
    <Link to="/Contact">Contact</Link>
    </li>
    <li>
     
      <Link to="/About">About</Link>
    </li>
    <li>
    <Link to="/Dashboard">Dashboard</Link>
    </li>
    <li>
       <Link to="/home">Home</Link>
    </li>
    
    </ul>
  </div>
  );
}
export default Navbar;