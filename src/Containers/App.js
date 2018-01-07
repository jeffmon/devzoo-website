import React, { Component } from "react";
import "../styles/App.css";
import Header from "./Header";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Team from "./Team";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="container justify-content-center">
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <About />
        </div>
        <div className="row">
          <Services />
        </div>
        <div className="row">
          <Contact />
        </div>
        <div className="row">
          <Team />
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
