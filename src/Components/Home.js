import React from "react";

import "../Components/Home.css";
import {AiOutlineArrowRight} from "react-icons/ai";
import { Link, animateScroll as scroll } from "react-scroll";
import Button from 'react-bootstrap/Button';

export default function Home({id }) {
    let styleobj =  {fontSize: 100 }
  return (
    <div className={("section-home")}>
      <div className="container-fluid homepage-bgimage" id={id}>
        <br></br>          
            <div className="textthingy">
                <div class="typewriter">
                    <h1>"Hello World" </h1>
                </div>
            </div>            
            <br></br>               
        <h1 style={{fontSize:40, color:"black"}}>My Name is</h1>
        <h1 style={{fontSize:60, color:"#5ab5d1" }}>Roshan Ramchandani</h1>
        <h4 style={{fontSize:40, color:"black"}}>Information Technology Student, Aspiring Software Engineer.</h4>
            <br></br>                   
            <br></br>
            <br></br>
            <br></br>
            <Link activeClass="active"
                                to="section1"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                <br></br>
                <br></br>
                <div class="wrapper">
                    <a id="buttonthingy" href="#"><span>Click Me!</span></a>
                </div>                
            </Link>
            
            
            <br></br>                    
      </div>
      
    </div>
  );
}