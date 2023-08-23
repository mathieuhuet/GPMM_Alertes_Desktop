import './navbar.css';
import { BiUserCircle } from "react-icons/bi";
import React from 'react';
import { Link } from 'react-router-dom';

/*
Navigation Bar on the left of the screen. 
It should always stay on screen.
*/


function Navbar() {
  return (
    <div className="Navbar">
    <div className="Bottom">
      <Link to='/user'>
        <div className="Users">
          <BiUserCircle />
        </div>
      </Link>
    </div>
    </div>
  );
}

export default Navbar