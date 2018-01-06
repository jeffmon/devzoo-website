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
      <div className="App">
        <Header />
        <About />
        <Services />
        <Contact />
        <Team />
        <Footer />
      </div>
    );
  }
}

export default App;
