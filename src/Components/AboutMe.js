import React from "react";
import profile from '../profile.jpg';
import {FaAngular} from "react-icons/fa";
import {FaNodeJs} from "react-icons/fa";
import {AiFillHtml5} from "react-icons/ai";
import {DiCss3} from "react-icons/di";
import {DiPython} from "react-icons/di";
import {AiOutlineConsoleSql} from "react-icons/ai";
import {SiCsharp} from 'react-icons/si';
import {FaReact} from 'react-icons/fa';
import {SiTypescript} from 'react-icons/si';
import {SiJavascript} from 'react-icons/si';
import {FaUnity} from 'react-icons/fa';
import '../App.css';
import './AboutMe.css';

export default function AboutMe({ id }) {
  return (
    <div className={("AboutMe")} style={{minHeight:100, paddingBottom:35}} id = {id}> 
        <div className={"Wrapper"}>
            <img className={"Profile"} src={profile} />
            <div className={"About"}>
                <h1>
                    About Me
                </h1>
                <br />
                <h5 >
                    <br />
                    I'm an Information Technology Student at Temasek Polytechnic, based in Singapore. 
                    <br />
                    <br />
                    I am a full-stack developer, but I'm looking to learn more about back-end development and 
                    machine learning.
                </h5>
            </div>    
        </div>       
        <div className={"Languages"}>    
            <h4>
              Languages and Frameworks I know and have made projects in:
            </h4>    
            <FaAngular size="90"></FaAngular>
            <FaNodeJs size="90"></FaNodeJs>
            <AiFillHtml5 size="90"></AiFillHtml5>
            <DiCss3 size="90"></DiCss3>
            <DiPython size="90"></DiPython>                     
            <AiOutlineConsoleSql size="90"></AiOutlineConsoleSql>            
            <SiCsharp size="90"></SiCsharp>
            <SiJavascript size="90"></SiJavascript>
            <FaReact className="logo" size="90"></FaReact>
            <SiTypescript size="90"></SiTypescript>   
            <FaUnity size="90"></FaUnity>                     
        </div>
      </div>
  );
}