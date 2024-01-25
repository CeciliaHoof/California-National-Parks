import { useState, useEffect } from "react";
import ParkCard from "../components/ParkCard";
import ParkInfo from "../components/ParkInfo";
import ParkFilter from "../components/ParkFilter";
import { Card, Container } from "semantic-ui-react";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  margin-top: 30px;
  font-size: 16px;
  text-align: center;
  padding: 5px;
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
  const [selectedPark, setSelectedPark] = useState({});
  const [filterActivity, setFilterActivity] = useState("");
  const [filterWildlife, setFilterWildlife] = useState("");

  useEffect(() => {
    fetch("http://localhost:8001/parks")
      .then((resp) => resp.json())
      .then((data) => setParks(data));
  }, []);

  function handleSelection(park) {
    setSelectedPark(park);
  }

  function handleFilter(activity, wildlife){
    setFilterActivity(activity);
    setFilterWildlife(wildlife)
  }

  
  function filterParks(parksArr, targetActivity){
    if (filterActivity.length === 0){
      return parksArr
    } else if(filterActivity.length > 0){
      return parksArr.filter(park => park.activities.includes(targetActivity))
    }
  }

  const filteredParks = filterParks(parks, filterActivity)

  const parksDisplay = filteredParks.map((park) => (
    <ParkCard park={park} key={park.id} onSelectPark={handleSelection} />
  ));

  return (
    <main>
      <PageWelcome>
        <h2>Welcome to the Parks!</h2>
        <ParkFilter onSubmitForm={handleFilter}/>
        <p>Click "View Park" to see Park details and read reviews</p>
      </PageWelcome>
      <CardContainer><Card.Group itemsPerRow={8}>{parksDisplay}</Card.Group></CardContainer>
        {Object.keys(selectedPark).length !== 0 ? 
        <ParkInfo park={selectedPark}/> :
        <StyledContainer>
          <h3>
            This page serves as your ultimate resource for detailed information
            on the diverse and awe-inspiring national parks scattered across the
            beautiful landscapes of the Golden State.
          </h3>
          <p> Start your virtual journey through California's iconic National Parks here. Explore the beauty of towering redwoods, pristine lakes, and rugged mountains. Plan your adventure with park details, reviews, and inspiration. Ready to share your own experience? Leave a review and be part of the community celebrating nature's grandeur – your adventure begins here!</p>
        </StyledContainer>
      }
    </main>
  );
}

export default Parks;
