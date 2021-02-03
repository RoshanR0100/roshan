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
import '../App.css';
import './section.css';

export default function Section1({ dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")} style={{minHeight:100, paddingBottom:35}}>
      <div className="section-content" id={id}>        
        <img src={profile} width="200" />
        <h1 style={{fontSize:40, color:"#585858"}}>
            About Me
        </h1>
        <h5 style={{color:"#585858"}}>
            I'm currently getting a diploma in Information Technology. 
            <br></br>I'm based in Singapore.
             I want to learn more about all things technology, but I'm particularly interested in machine learning.
        </h5>
        <div>        
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
        </div>
        <br></br>
      </div>
    </div>
  );
}