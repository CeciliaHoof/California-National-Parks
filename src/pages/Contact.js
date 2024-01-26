import { useEffect, useState } from "react";
import { Image } from "semantic-ui-react";
import styled from "styled-components";

const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 0px 10px 0px 10px;
  gap: 10px;
`;
const ContactsDiv = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const StyledLink = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: #6b7e8d;
  text-align: center;
`;
const ImageContainer = styled.div`
  text-align: center;
  font-style: italic;
`;

function Contact() {
  const [image, setImage] = useState({});

  const email = "emailparks@example.com";
  const phone = "(800) 555-5555";
  const twitter = "https://fake-twitter-link.com/CAStateParks";
  const facebook = "https://fake-facebook-link.com/CaliforniaStateParks";
  const instagram = "https://fake-instagram-link.com/CAStateParks";

  useEffect(() => {
    fetch(`http://localhost:8001/images/8`)
      .then((resp) => resp.json())
      .then((data) => setImage(data));
  }, []);

  return (
    <main>
      <ContainerDiv>
        <ContactsDiv>
          <h2>Contact Information</h2>
          <p>
            Have questions, feedback, or park stories to share? Reach out to us!
            We're here to assist and enhance your experience with California's
            National Parks. Connect with us on social media and be a part of our
            community dedicated to celebrating and preserving these natural
            wonders.
          </p>
          <h3>Email</h3>
          <StyledLink href={`mailto:${email}`}>{email}</StyledLink>
          <h3>Phone</h3>
          <StyledLink href={`tel:${phone}`}>{phone}</StyledLink>
          <h3>Social Media</h3>
          <p>
            <StyledLink
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </StyledLink>
          </p>
          <p>
            <StyledLink
              href={facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </StyledLink>
          </p>
          <p>
            <StyledLink
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </StyledLink>
          </p>
        </ContactsDiv>
        <ImageContainer>
          <Image src={image.url} alt={image.altText} />
          <p>{`${image.caption} Photo Credit: ${image.credit}`}</p>
        </ImageContainer>
      </ContainerDiv>
    </main>
  );
}

export default Contact;
