import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import ParkCard from "../components/ParkCard";
import { Card, Container } from "semantic-ui-react";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  margin-top: 45px;
  margin-bottom: 52px;
  font-size: 16px;
`;
const PageWelcome = styled(Container)`
  text-align: center;
  margin-bottom: 10px;
`;

const CardContainer = styled.div`
  margin: 0px 11px 0px 11px;
`

function Parks() {
  const [parks, setParks] = useState([]);
  const [parkSelected, setParkSelected] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8001/parks")
      .then((resp) => resp.json())
      .then((data) => setParks(data));
  }, []);

  function handleSelection() {
    setParkSelected(true);
  }

  const parksDisplay = parks.map((park) => (
    <ParkCard park={park} key={park.id} onSelectPark={handleSelection} />
  ));

  return (
    <main>
      <PageWelcome>
        <h2>Welcome to the Parks!</h2>
        <p>Click "View Park" to see Park details and read reviews</p>
      </PageWelcome>
      <CardContainer><Card.Group itemsPerRow={8}>{parksDisplay}</Card.Group></CardContainer>
        <Outlet context={parks} />
        {parkSelected === false && (
        <StyledContainer>
          <h3>
            This page serves as your ultimate resource for detailed information
            on the diverse and awe-inspiring national parks scattered across the
            beautiful landscapes of the Golden State.
          </h3>
          <p>
            Explore the wonders of iconic parks such as Yosemite, Joshua Tree,
            Sequoia, and more, each offering a unique blend of natural beauty,
            rich biodiversity, and unparalleled recreational opportunities.
            Immerse yourself in the majestic scenery of towering redwoods,
            pristine lakes, rugged mountains, and expansive deserts that define
            California's National Parks.
          </p>
          <p>
            Our user-friendly interface provides you with easy navigation,
            allowing you to delve into specific park details, including
            operating hours, fee information, weather information, popular
            activities, and wildlife you may encounter. Whether you're an avid
            hiker, nature enthusiast, or someone planning a family adventure,
            this page offers valuable insights to make the most of your visit.
          </p>
          <p>
            We encourage you to read other users’ reviews for first-hand
            accounts of National Parks experiences. We hope they will help you
            feel inspired to embark on your own journey of exploration and
            discovery! Don’t forget to leave your own review if you have visited
            any of these beautiful Park!
          </p>
          <p>
            Whether you're planning your next outdoor adventure or simply
            seeking inspiration, our detailed National Parks of California page
            is your go-to destination for an immersive and informative
            experience. Join us in celebrating the splendor of California's
            national parks and embark on a virtual journey through the heart of
            nature's grandeur. Your adventure begins here!
          </p>
        </StyledContainer>
      )}
    </main>
  );
}

export default Parks;
