import React, { Component } from "react";
import {AiOutlineCode} from "react-icons/ai";
import { Link, animateScroll as scroll } from "react-scroll";
import {IconContext} from "react-icons";

export default class Navbar extends Component {
  render() {
    return (
      
      <nav className="nav" id="navbar">
        
        <div className="nav-content">
        
          
            <Link to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
              <AiOutlineCode
                className="nav-logo"
                alt="Logo.svg"
                color="lightblue"
               />
            </Link>
          
          
          <ul className="nav-items">
            <li className = "nav-item" >
                <Link activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                    Home
                  </Link>
                </li>
                <li className = "nav-item">
                    <Link activeClass="active"
                        to="section1"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                    About
                    </Link>
                </li>
                <li className = "nav-item">
                    <Link activeClass="active"
                        to="section2"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                    Projects
                    </Link>
                </li>
                <li className = "nav-item">
                    <Link activeClass="active"
                        to="section3"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                      Contact
                    </Link>
                </li>
          </ul>
        </div>
      </nav>
    );
  }
}