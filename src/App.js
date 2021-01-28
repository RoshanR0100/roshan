import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Home from "./Components/Home";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/Home.css'

class App extends Component {
  
  render() {
    return (
      <div className="App">        
        <Home
          id="home" /> 
        <Navbar />          
        <Section
          title="About Me"
          subtitle="Hello"
          dark={false}
          id="section1"          
        ></Section>
        <Section2
          title="Hello"
          subtitle="Hello"          
          dark={false}
          id="section2"          
        >         
          
        </Section2>
        <Section3
          title="Hello"
          subtitle="Hello"          
          dark={true}
          id="section3"
        ></Section3>
        
      </div>
    );
  }
}

export default App;
