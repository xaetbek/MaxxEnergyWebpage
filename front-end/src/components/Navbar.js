import React from "react";
import "./Navbar.css";
import logo from "../assets/images/navbar-logo-yellow.jpeg";

function Navbar({ currentPage, setCurrentPage }) {
  return (
    <nav className="nav">
      <button onClick={() => setCurrentPage("Home")} className="logo-link">
        <img src={logo} alt="MAXX Energy Logo" className="logo-img" />
      </button>
      <ul className="nav-links">
        <li>
          <button 
            onClick={() => setCurrentPage("Home")} 
            className={currentPage === "Home" ? "active" : ""}
          >
            Home
          </button>
        </li>
        <li>
          <button 
            onClick={() => setCurrentPage("About")} 
            className={currentPage === "About" ? "active" : ""}
          >
            About
          </button>
        </li>
        <li>
          <button 
            onClick={() => setCurrentPage("Blog")} 
            className={currentPage === "Blog" ? "active" : ""}
          >
            Blog
          </button>
        </li>
        <li>
          <button 
            onClick={() => setCurrentPage("Careers")} 
            className={currentPage === "Careers" ? "active" : ""}
          >
            Careers
          </button>
        </li>
        <li>
          <button 
            onClick={() => setCurrentPage("Contact")} 
            className={currentPage === "Contact" ? "active" : ""}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
