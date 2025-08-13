import React from "react";
import "./Navbar.css";
import logo from "../assets/images/navbar-logo-yellow.jpeg"; // adjust path if your logo is elsewhere

function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="logo-link">
        <img src={logo} alt="MAXX Energy Logo" className="logo-img" />
      </a>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
