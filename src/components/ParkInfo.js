import { Image, Container, Segment, List } from "semantic-ui-react";
import ParkReviews from "./ParkReviews";
import styled from "styled-components";

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  margin-top: 10px;
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
  color: #2e3d23;
  font-size: 14px;
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
        <Image src={images[1].url} size="big" floated="left" />
        <div>
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
              <StyledLink href={url}>Visit the NPS Website for more information.</StyledLink>
            </LinkContainer>
          </InfoDiv>
        </div>
      </FlexDiv>

      <ParkReviews park={park} />
    </>
  );
}

export default ParkInfo;
