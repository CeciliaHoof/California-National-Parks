// import data from './data.json';
import {useEffect, useState} from "react";
import {Image, Segment} from "semantic-ui-react";
import "../stylesheets/contact.css";



function Contact() {
  const [image, setImage] = useState({});
  const email = "info@parks.ca.gov";
  const phone = "(800) 777-0369";
  const twitter = "https://twitter.com/CAStateParks"
  const facebook = "https://www.facebook.com/CaliforniaStateParks/"
  const instagram = "https://www.instagram.com/castateparks/"

  
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
        
