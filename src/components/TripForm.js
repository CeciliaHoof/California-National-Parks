import { Form, Dropdown } from "semantic-ui-react";
import { useState } from "react";

function TripForm({ onSubmitForm }) {
  const [selectedSeason, setSelectedSeason] = useState('')
  const [selectedActivity, setSelectedActivity] = useState('')

  const seasons = ["Winter", "Spring", "Summer", "Fall"];
  let seasonNum = 0
  const seasonOptions = seasons.map((season) => {
    seasonNum++;
    return { key: season, text: season, value: seasonNum};
  });

  const activities = [
    "Hiking",
    "Fishing",
    "Birdwatching",
    "Paddling",
    "Rock Climbing",
  ];
  let activityNum = 0;
  const activityOptions = activities.map((activity) => {
    activityNum++;
    return { key: activity, text: activity, value: activityNum };
  });

  function handleSubmit(e){
    e.preventDefault();
    onSubmitForm(`${selectedSeason}${selectedActivity}`)
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <Dropdown
          selection
          name="season"
          value={selectedSeason}
          options={seasonOptions}
          placeholder="Select Season"
          onChange={(e, {value}) => setSelectedSeason(value)}
        />
        <Dropdown
          selection
          name="activity"
          value={selectedActivity}
          options={activityOptions}
          placeholder="Select Activity"
          onChange={(e, {value}) => setSelectedActivity(value)}
        />
      </Form.Field>
      <Form.Button type="submit">Submit</Form.Button>
    </Form>
  );
}
export default TripForm;
