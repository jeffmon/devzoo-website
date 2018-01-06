import React, { Component } from "react";
import logo from "../Assets/logo.svg";

class Header extends Component {
  render() {
    return (
      <header className="header_container">
        <nav>NAVBAR</nav>
        <br />
        HEADER
        <br />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    );
  }
}

export default Header;
