import React, { Component } from "react";
import {AiOutlineCode} from "react-icons/ai";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
  render() {
    return (
      
      <nav className="nav" id="navbar">
        
        <div className="nav-content">
            <Link to="Home"
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
                        to="Home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                  Home
                </Link>
              </li>
              <li className = "nav-item">
                  <Link activeClass="active"
                      to="AboutMe"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>
                  About
                  </Link>
              </li>
              <li className = "nav-item">
                  <Link activeClass="active"
                      to="Projects"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>
                  Projects
                  </Link>
              </li>
              <li className = "nav-item">
                <Link activeClass="active"
                    to="Contact"
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