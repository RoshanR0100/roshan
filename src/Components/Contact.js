import React from "react";
import {FaGithubSquare} from "react-icons/fa";
import {AiFillLinkedin} from "react-icons/ai";
import {AiFillBackward} from "react-icons/ai";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Contact.css";
import Button from "react-bootstrap/Button";
import "react-bootstrap";
import { SiWhitesource } from "react-icons/si";
import emailjs from 'emailjs-com';

export default function Contact({ id }) {
    
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_ph6roij', 'template_5mudtt9', e.target, 'user_5gNjp1s9fQJJA8a3A3sKl')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
    

  return (
    <div className={"Contact"} id={id}>
        <h1 className="Title" style={{color: "white"}}>Contact Me</h1>
        <h4 className="Email">E-mail: roshanramchandani76@gmail.com</h4>
        <form className="ContactForm" onSubmit={sendEmail}>
            <textarea className = "TextArea" name="message" placeholder="Leave your contact details and message." />            
            <Button className="rounded-0 z-depth-5" size="lg" variant="dark" type="submit"  value="Send">SUBMIT</Button>
        </form>
          <Link 
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
          <AiFillBackward size="50" />
        </Link>
      <footer id="footer" >
        <a href="https://github.com/RoshanR0100"> 
            <FaGithubSquare size="80"></FaGithubSquare>
        </a> 
        <a href="https://www.linkedin.com/in/roshan-ramchandani-68ab681a2/">
            <AiFillLinkedin size="80"></AiFillLinkedin>
        </a>
        <br></br>
        <p>Roshan Ramchandani <br></br>email:roshanramchandani76@gmail.com</p>
      </footer>
    </div>
  );
}