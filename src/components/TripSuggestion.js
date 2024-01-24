import { Image, List } from "semantic-ui-react";
import styled from "styled-components";

const ContainerDiv=styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
  padding: 10px;
`

const DescriptionDiv = styled.div`
  margin-left:15px;
`

const LinkContainer = styled.div`
  text-align: center;
`;

const StyledLink = styled.a`
  color: #2e3d23;
  font-size: 16px;
`;

const ImageContainer = styled.div`
  text-align: center;
`;

const StyledImage = styled(Image)`
  &&{margin-bottom: 8px;}
`

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
        <StyledImage src={image.url} alt={image.altText} size="massive" floated="right" />
        <Caption>{`${image.caption} Photo credit: ${image.credit}`}</Caption>
      </ImageContainer>
      <DescriptionDiv>
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
      </DescriptionDiv>
    </ContainerDiv>
  );
}

export default TripSuggestion;
