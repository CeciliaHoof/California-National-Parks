import { Image, List } from "semantic-ui-react";
import ParkReviews from "./ParkReviews";
import styled from "styled-components";

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  margin-top: 10px;
  gap: 30px;
`;

const InfoDiv = styled.div`
  margin-top: 25px;
  padding: 5px;
`;

const StyledList = styled(List)`
  text-align: center;
`;
const LinkContainer = styled.div`
  text-align: center;
`;

const StyledLink = styled.a`
  color: #6B7E8D;
  font-size: 16px;
`;

const ImageContainer = styled.div`
  text-align: center;
  font-style: italic;
  width: 600px;
`;

const ContentContainer = styled.div`
  width: 875px;
`;

function ParkInfo({ park }) {
  if (!park) {
    return <h1>loading...</h1>;
  }
  const {
    fullName,
    description,
    operatingHours,
    entranceFee,
    weatherInfo,
    url,
    images,
    activities,
    wildlife,
  } = park;

  const activitiesList = activities.map((activity) => (
    <List.Item key={activity}>{activity}</List.Item>
  ));
  const wildlifeList = wildlife.map((animal) => (
    <List.Item key={animal}>{animal}</List.Item>
  ));

  return (
    <>
      <FlexDiv>
        <ImageContainer>
          <Image
            src={images[1].url}
            alt={images[1].altText}
            size="big"
            floated="left"
          />
          <p>{`${images[1].caption} Photo Credit: ${images[1].credit}`}</p>
        </ImageContainer>
        <ContentContainer>
          <h2>{fullName}</h2>
          <p>{description}</p>
          <h3>Activities</h3>
          <StyledList bulleted horizontal>
            {activitiesList}
          </StyledList>

          <h3>Park Wildlife</h3>
          <StyledList bulleted horizontal>
            {wildlifeList}
          </StyledList>
          <InfoDiv>
            <h3>General Park Information</h3>
            <p>
              <strong>Operating Hours: </strong>
              {operatingHours}
            </p>
            {entranceFee === 0 ? (
              <p>
                <strong>Entrance fee: </strong>Entrance to this park is free.
              </p>
            ) : (
              <p>
                <strong>Entrance fee: </strong>
                {`$${entranceFee}`}
              </p>
            )}
            <p>
              <strong>Weather information: </strong>
              {weatherInfo}
            </p>

            <LinkContainer>
              <StyledLink href={url}>
                Visit the NPS Website for more information.
              </StyledLink>
            </LinkContainer>
          </InfoDiv>
        </ContentContainer>
      </FlexDiv>
      <ParkReviews park={park} />
    </>
  );
}

export default ParkInfo;
