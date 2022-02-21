import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import AboutMe from "./Components/AboutMe";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/Home.css'

class App extends Component {
  
  render() {
    return (
      <div className="App">        
        <Home id="Home" /> 
        <Navbar />          
        <AboutMe
          title="About Me"
          id="AboutMe"/>
        <Projects 
          id="Projects"/>
        <Contact
          id="Contact"/>
      </div>
    );
  }
}

export default App;
