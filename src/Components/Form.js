import React from 'react';
import './Section3.css';
import Button from 'react-bootstrap/Button';

export default class extends React.Component {
  constructor(props) {
	super(props);
	this.state = { feedback: '', name: '', email: '' };
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
	return (
  	<form className="email-template">
    	<div>
		<input id="email-template" name="email-template" placeholder="Name" onChange={this.handleChange} required value={this.state.name} style={{
                width: "100%",
                paddingLeft: "8px",
                paddingTop: "6px",
                paddingBottom: "6px",
                borderColor: "white" ,
                marginTop:10,
				backgroundColor: "gray",  
				color: "white"         
        }}></input>
		<input id="email-template" name="email-template" placeholder="Your Email" onChange={this.handleChange} required value={this.state.email} style={{
                width: "100%",
                paddingLeft: "8px",
                paddingTop: "6px",
                paddingBottom: "6px",
                borderColor: "white" ,
                marginTop:10,  
				backgroundColor:"gray",
				color: "white"        
        }}></input>
		<input 
			id="email-template"
        	name="email-template"
        	onChange={this.handleChange}
        	placeholder="Your Message"
        	required
        	value={this.state.feedback}
			style={{
                width: "100%",
                paddingLeft: "8px",
                paddingTop: "6px",
                paddingBottom: "6px",
                borderColor: "white" ,
                marginTop:10,
				backgroundColor:"gray",
				color: "white"        
        }}></input>	
    	</div>
		<Button className="rounded-0 z-depth-5" size="lg" variant="dark" type="submit" style={{marginTop:30}} onClick={this.handleSubmit}>SUBMIT</Button>
    	
  	</form>
	)
  }

  handleChange(event) {
	this.setState({feedback: event.target.value})
	
  }
  handleChange(event) {
	this.setState({email: event.target.value})
	
  }
  handleChange(event) {
	this.setState({name: event.target.value})
	
  }

  handleSubmit() {
  }

  sendFeedback (templateId, variables) {
	window.emailjs.send(
  	'gmail', templateId,
  	variables
  	).then(res => {
    	console.log('Email successfully sent!')
  	})
  	// Handle errors here however you like, or use a React error boundary
  	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }
}