import { Image, List } from "semantic-ui-react";
import styled from "styled-components";

const ContainerDiv=styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
  padding: 10px;
  gap: 30px;
`

const LinkContainer = styled.div`
  text-align: center;
`;

const StyledLink = styled.a`
  color: #6B7E8D;
  font-size: 16px;
`;

const ImageContainer = styled.div`
  text-align: center;
`;

const Caption = styled.p`
  font-style: italic;
`;

function TripSuggestion({ suggestedTrip }) {
  const { image, park, trip, activities, reminder, url } = suggestedTrip;

  if (!suggestedTrip.trip) {
    return <h2>Loading...</h2>;
  }

  return (
    <ContainerDiv>
      <ImageContainer>
        <Image src={image.url} alt={image.altText} size="massive" floated="right" />
        <Caption>{`${image.caption} Photo credit: ${image.credit}`}</Caption>
      </ImageContainer>
      <div>
        <h2>{park}</h2>
      <p>{trip}</p>
      <List
        celled
        items={activities.map((activity) => (
          <List.Item key={activity.name}>
            <List.Header>{activity.name}</List.Header>
            {activity.description}
          </List.Item>
        ))}
      />
      <p>{reminder}</p>
      <LinkContainer>
      <StyledLink href={url}>Visit the Park's Website for Further Details</StyledLink>
      </LinkContainer>
      <h3>Don't forget to leave a review of the Parks page after your visit!</h3>
      </div>
    </ContainerDiv>
  );
}

export default TripSuggestion;
