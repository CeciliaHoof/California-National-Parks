import { Image, Segment } from "semantic-ui-react";
import ParkReviews from "./ParkReviews";
function ParkInfo({ park }) {
  return (
    <Segment>
      <Segment clearing>
        <Image src={park.images[1].url} size={"big"} floated="left" />
        <h2>{park.fullName}</h2>
        <p>{park.description}</p>
        <p>
          <strong>Operating Hours: </strong>
          {park.operatingHours}
        </p>
        {park.entranceFee === 0 ? (
          <p>
            <strong>Entrance fee: </strong>Entrance to this park is free.
          </p>
        ) : (
          <p>
            <strong>Entrance fee: </strong>
            {`$${park.entranceFee}`}
          </p>
        )}
        <p>
          <strong>Weather information: </strong>
          {park.weatherInfo}
        </p>
        <a href={park.url}>Visit the NPS Website for more information.</a>
      </Segment>
      <Segment.Group>
        <Segment>
          <h3>Activities</h3>
          <p>{park.activities.join(", ")}</p>
        </Segment>
        <Segment>
          <h3>Park Wildlife</h3>
          <p>{park.wildlife.join(", ")}</p>
        </Segment>
      </Segment.Group>
      <ParkReviews park ={park} />
    </Segment>
  );
}

export default ParkInfo;
