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

export default function Section2({ id }) {
  
  return (
    <div className="Section2" style={{backgroundColor:"grey"}}>
      <div className="section-content" id={id}>        
        <h1 style={{fontSize:50}}>Projects</h1>           
        <br></br>
        <Card className="text-center" style={{ marginLeft:150, maxWidth:400}} width="100" height="400">
         <Card.Img variant="top" src={glasskat} style={{width:200, height:400, marginLeft:110}} /> 
            <Card.Body>
            <Card.Title>
              GlassKat
            </Card.Title>
              <Card.Text>An IoT solution for monitoring your cat. 
                <br></br>Using Raspberry Pis and machine learning to help you better understand your cat.
              </Card.Text>
              <br></br>
              <Button href="https://github.com/RoshanR0100/glasskat-ionic">
                View it in Github
              </Button>
            </Card.Body>
          </Card>
          <br></br>
               
        
      </div>
        
    </div>
    
  );
}