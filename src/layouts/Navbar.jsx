import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/discover">Discover</Link></li>
        <li><Link to="/join">Join</Link></li>
      </ul>      
    </nav>
  )
}

export default Navbar
