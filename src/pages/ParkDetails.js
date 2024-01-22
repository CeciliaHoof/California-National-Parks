import { useParams, useOutletContext } from "react-router-dom";
import { Segment, Image } from "semantic-ui-react";
import ParkInfo from "../components/ParkInfo";
import ParkReviews from "../components/ParkReviews";

function ParkDetails() {
  const params = useParams();
  const parks = useOutletContext();
  
  const park = parks.find(park => park.id === parseInt(params.id))

  if(!park){
    return(<h1> Loading </h1>)
  }
  
  return(
        <ParkInfo park={park}/>
  );
};

export default ParkDetails;