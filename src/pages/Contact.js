import ImageGallery from "../components/ImageGallery"





function Contact() {
  const email = "info@parks.ca.gov";
  const phone = "(800) 777-0369";
  const twitter = "https://twitter.com/CAStateParks"
  const facebook = "https://www.facebook.com/CaliforniaStateParks/"
  const instagram = "https://www.instagram.com/castateparks/"

  const linkStyle = {
    fontSize: '20px', 
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#4183c4',
  };

  return (
    <>
      <main>
        <h1>Contact Information</h1>
        <h1>Email</h1>
        <p style={linkStyle}><a href={`mailto:${email}`} style={linkStyle}>{email}</a></p>
        <h1>Phone</h1>
        <p style={linkStyle}><a href={`tel:${phone}`} style={linkStyle}>{phone}</a></p>
        <h1>Social Media
        
            <p><a href={twitter} target="_blank" rel="noopener noreferrer">Twitter</a></p>
            <p><a href={facebook} target="_blank" rel="noopener noreferrer">Facebook</a></p>
            <p><a href={instagram} target="_blank" rel="noopener noreferrer">Instagram</a></p>
          
        </h1>
        <ImageGallery />
      
      </main>
    </>
  );
}

export default Contact;
        
