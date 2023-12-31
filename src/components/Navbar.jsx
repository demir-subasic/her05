import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="navbar-menu">
      <Link to="/">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      </Link>
      <ul className={`menu ${menuActive ? 'active' : ''}`}>
        <li><Link to="/"><a>Home</a></Link></li>
        <li><Link to="/about"><a>About</a></Link></li>
        <li><Link to="/products"><a>Products</a></Link></li>
        <li><Link to="/impact"><a>Impact</a></Link></li>
        <li><Link to="/contact"><a>Contact</a></Link></li>
      </ul>
      <div className="user-icon" onClick={toggleMenu}>&#9776;</div>
    </div>
  );
};

export default Navbar;
