import React from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import glasskat from '../glasskat-screenshot.jpg';
import 'react-bootstrap';
import trips from '../image3.png';
import './Projects.css';

export default function Projects({ id }) {
  
  return (
    <div className={("Projects")} id={id}>
        <h1 className={"Title"}>Projects</h1>           
        <Card className="GlassKat">
         {/* <img  className = "CardImage" src={glasskat} />  */}
            <Card.Body className = "CardBody">
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
          <Card className="TripsManager">
            {/* <img className = "CardImage" src={trips} />  */}
              <Card.Body className = "CardBody">
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
      </div>
  );
}