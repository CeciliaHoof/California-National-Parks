import { useParams, useOutletContext } from "react-router-dom";
import { Segment, Image } from "semantic-ui-react";
import ParkInfo from "../components/ParkInfo"

function ParkDetails() {
  const params = useParams();
  const parks = useOutletContext();
  
  const park = parks.find(park => park.id === parseInt(params.id))

  if(!park){
    return(<h1> Loading </h1>)
  }
  
  return(
      <Segment>
        <Image src={park.images[1].url} size={"big"} floated="left"/>
        <ParkInfo park={park}/>
      </Segment>
  );
};

export default ParkDetails;