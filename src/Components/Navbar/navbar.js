import './navbar.css';
import { BiUserCircle, BiListUl } from "react-icons/bi";
import React from 'react';
import { Link } from 'react-router-dom';

/*
Navigation Bar on the left of the screen. 
It should always stay on screen.
*/


function Navbar() {
  return (
    <div className="Navbar">
      <Link to='/'>
        <div className="Main">
          <BiListUl />
        </div>
      </Link>
      <Link to='/user'>
        <div className="User">
          <BiUserCircle />
        </div>
      </Link>
    </div>
  );
}

export default Navbar
