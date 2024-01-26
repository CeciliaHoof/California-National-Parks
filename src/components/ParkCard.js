import { Card, Image } from "semantic-ui-react";
import styled from "styled-components";

const StyledCard = styled(Card)`
  text-align: center;
`;

const StyledSpan = styled.span`
  font-size: 14px;
  color: #6b7e8d;
`;
function ParkCard({ park, onSelectPark }) {
  const { fullName, images } = park;

  return (
    <StyledCard>
      <Image height="119px" src={images[0].url} />
      <Card.Content>
        <Card.Header>{fullName}</Card.Header>
      </Card.Content>
      <Card.Content extra>
        <StyledSpan onClick={() => onSelectPark(park)}>View Park</StyledSpan>
      </Card.Content>
    </StyledCard>
  );
}

export default ParkCard;
