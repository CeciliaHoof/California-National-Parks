import { useState, useEffect } from "react";
import { Image } from "semantic-ui-react";
import styled from "styled-components";

const StyledImageGallery = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledImageGroup = styled(Image.Group)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
`;

const Credits = styled.p`
  font-size: 12px;
`;

function ImageGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/images")
      .then((resp) => resp.json())
      .then((data) => setImages(data));
  }, []);

  const imageDisplay = images.map((image) => (
    <Image key={image.id} src={image.url} alt={image.altText} size="medium" />
  ));

  const photoCredits = images.map((image) => image.credit);

  return (
    <>
      <StyledImageGallery>
        <StyledImageGroup size="medium">{imageDisplay}</StyledImageGroup>
        <Credits>
          Photo credit starting top left: {photoCredits.join(", ")}
        </Credits>
      </StyledImageGallery>
    </>
  );
}

export default ImageGallery;
