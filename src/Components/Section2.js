import React from "react";
import theplan from '../ThePlanScreenshot.jpg';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Flippy,{FrontSide,BackSide} from 'react-flippy';
import itad from '../ITADScreenshot.jpg';
import Button from "react-bootstrap/Button";
import glasskat from '../glasskat-screenshot.jpg';
import Modal from 'react-bootstrap/Modal';
import 'react-bootstrap';
import trips from '../image1.png';

export default function Section2({ id }) {
  
  return (
    <div className="Section2" style={{backgroundColor:"grey", minHeight:100}}>
      <div className="flexbox-container" id={id}>  
      <br></br>      
        <h1 style={{fontSize:50, color:"white"}}>Projects</h1>           
        <br></br>
        <Card className="flexbox-container text-center" style={{ maxWidth:400}} width="100" height="400">
         <Card.Img className="flexbox-container" variant="top" src={glasskat} style={{width:200, height:400, justifyContent:"center"}} /> 
            <Card.Body>
            <Card.Title>
              GlassKat
            </Card.Title>
              <Card.Text>An IoT solution for monitoring your cat. 
                <br />Using Raspberry Pis and machine learning to help you better understand your cat.
                <br />
                Languages used: Typescript, HTML, CSS
              </Card.Text>
              <br></br>
              <Button href="https://github.com/RoshanR0100/glasskat-ionic">
                View it in Github
              </Button>
            </Card.Body>
          </Card>
          <br></br>
          <Card className="flexbox-container text-center" style={{ maxWidth:400}} width="100" height="400">
         <Card.Img className="flexbox-container" variant="top" src={trips} style={{ justifyContent:"center"}} /> 
            <Card.Body>
            <Card.Title>
              Trips Manager
            </Card.Title>
              <Card.Text>
                A trips manager where you can see the location and description of the trips.

                I made this app using ASP.NET Core and react. It has some basic CRUD operations.
                <br />
                Languagues used: C#, JSX, Javascript, HTML, CSS
              </Card.Text>
              <br></br>
              <Button href="https://github.com/RoshanR0100/Trips">
                View it in Github
              </Button>
            </Card.Body>
          </Card>
          <br></br>
               
        
      </div>
        
    </div>
    
  );
}