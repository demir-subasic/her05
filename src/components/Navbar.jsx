import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

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
      <ul className={`menu ${menuActive ? "active" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/impact">Impact</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="user-icon" onClick={toggleMenu}>
        &#9776;
      </div>
    </div>
  );
};

export default Navbar;
