import React from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import glasskat from '../glasskat-screenshot.jpg';
import 'react-bootstrap';
import trips from '../image3.png';
import './Projects.css';
import scb from '../Assets/SousChefBanner.png'
import {FaGithubSquare, FaGooglePlay} from "react-icons/fa";
import {CgWebsite} from 'react-icons/cg';

export default function Projects({ id }) {
  
  return (
    <div className={("Projects")} id={id}>
        <h1 style={{color: 'black', fontWeight: 'bold'}}>Projects</h1>           
          <Card className="Card">
            <Card.Body className="Body">
              <img src={scb} className="CardImage" />
              <Card.Title>
                Sous-Chef
              </Card.Title>
              <Card.Text>
                I made an app that helps you find a recipe by inputing what ingredients you have. 
                The app is currently only available on the google play store, but I am working on a website version for iPhone users.
                <br />
                Languages used: JSX, React-Native framework, CSS
              </Card.Text>
              <br />
              <Button href="https://github.com/RoshanR0100/sous-chef">
                  <FaGithubSquare size="30" style={{margin: 5}} />
                  View it in Github
              </Button>
              <br />
              <br/>
              <Button href="https://play.google.com/store/apps/details?id=com.roshan0100.souschef&gl=US">
                  <FaGooglePlay size="30" style={{margin: 5}} />
                  View it in Google Play store
              </Button>
              <br/>
              <br/>
              <Button href="https://sous-chef-web.netlify.app/">
                  <CgWebsite size="30" style={{margin: 5}} />
                  View the website
              </Button>
            </Card.Body>
          </Card>
        <Card className="Card">
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
                  <FaGithubSquare size="30" style={{margin: 5}} />
                  View it in Github
                </Button>
            </Card.Body>
          </Card>
          <Card className="Card">
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
                  <FaGithubSquare size="30" style={{margin: 5}} />
                  View it in Github
                </Button>
              </Card.Body>
          </Card>
      </div>
  );
}