import React, { Component } from "react";
import logo from "../Assets/devZoo_white.png";

class Header extends Component {
  render() {
    return (
      <header className="header_container">
        <nav className="nav">
          <a href="#" className="nav-link">
            About Us
          </a>
          <a href="#" className="nav-link">
            Services
          </a>
          <a href="#" className="nav-link">
            Contact
          </a>
          <a href="#" className="nav-link">
            Team
          </a>
        </nav>
        <img src={logo} className="logo_img" alt="logo" />
      </header>
    );
  }
}

export default Header;
