import { Link } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";
import styled from "styled-components";

const StyledLink = styled(Link)`
    font-size: 14px;
`
const StyledCard = styled(Card)`
    text-align: center;
`

function ParkCard({ park, onSelectPark }) {
  const { fullName, images } = park;

  return (
    <StyledCard>
      <Image height="119px" src={images[0].url} />
      <Card.Content>
        <Card.Header>{fullName}</Card.Header>
      </Card.Content>
      <Card.Content extra>
        <span onClick={() => onSelectPark(park)}>View Park</span>
      </Card.Content>
    </StyledCard>
  );
}

export default ParkCard;
