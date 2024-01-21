import { useParams, useOutletContext } from "react-router-dom";

function ParkDetails() {
  const params = useParams();
  const parks = useOutletContext();
  
  const park = parks.find(park => park.id === parseInt(params.id))

  return(
      <aside>
        <h1>{`This area will render details about ${park.fullName}`}</h1>
      </aside>
  );
};

export default ParkDetails;