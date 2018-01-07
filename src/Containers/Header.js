import React, { Component } from "react";
import logo from "../Assets/logo.svg";

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
        HEADER
        <br />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    );
  }
}

export default Header;
