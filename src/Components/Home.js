import React from "react";

import "../Components/Home.css";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Home({id }) {
    let styleobj =  {fontSize: 100 }
  return (
    <div className={("Home")} id = {id}>     
        <div className="textthingy">
            <div className="typewriter">
                <h1>"Hello World" </h1>
            </div>
        </div>                       
        <h1 style={{fontSize:40, color:"black", flex: 3}}>My Name is</h1>
        <h1 style={{fontSize:60, color:"#5ab5d1", flex: 3}}>Roshan Ramchandani</h1>
        <h4 style={{fontSize:40, color:"black", flex: 3}}>Aspiring Software Engineer.</h4>
        <Link activeClass="active"
            to="AboutMe"
            spy={true}
            smooth={true}
            duration={500}>
          <div className="wrapper">
              <a id="buttonthingy" href="#"><span>Click Me!</span></a>
          </div>                
        </Link>                        
      </div>
  );
}