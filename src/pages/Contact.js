
// import data from './data.json';
import {useEffect, useState} from "react";
import {Image, Segment} from "semantic-ui-react";
import "../stylesheets/contact.css";




function Contact() {

  const email = "emailparks@example.com";
  const phone = "(800) 555-5555";
  const twitter = "https://fake-twitter-link.com/CAStateParks"
  const facebook = "https://fake-facebook-link.com/CaliforniaStateParks"
  const instagram = "https://fake-instagram-link.com/CAStateParks"
  

  
 useEffect(() => {
  fetch(`http://localhost:8001/images/8`)
   .then(resp => resp.json())
   .then(data => setImage(data));

 }, []);
  
 
 
  return (
    <main>
      <Segment.Group horizontal>
        <Segment>
          <Segment.Group>
            <h2>Contact Information</h2>
            <Segment>
              <h3>Email</h3>
              <p><a href={`mailto:${email}`}>{email}</a></p>
            </Segment>
            <Segment>
              <h3>Phone</h3>
              <p><a href={`tel:${phone}`}>{phone}</a></p>
            </Segment>
            <Segment>
              <h3>Social Media

                <p><a href={twitter} target="_blank" rel="noopener noreferrer">Twitter</a></p>
                <p><a href={facebook} target="_blank" rel="noopener noreferrer">Facebook</a></p>
                <p><a href={instagram} target="_blank" rel="noopener noreferrer">Instagram</a></p>
              </h3>
            </Segment>
          </Segment.Group>
        </Segment>
        <Image floated="right" src={image.url} size='massive' />


      </Segment.Group>
    </main>

  );
}

export default Contact;
        
