import { Container, Image, List, Segment } from "semantic-ui-react";

function TripSuggestion({ tripSuggestion }) {
    const { image, park, trip, activities, reminder, url } = tripSuggestion;
  
    if (!tripSuggestion.trip) {
        return <h2>Loading...</h2>;
    }

  

  return (
    <Container>
      <h3>{park}</h3>
      <Image src={image.url} size="big" floated="right"/>
      <p>{trip}</p>
      <List celled
        items={activities.map((activity) => (
          <List.Item key={activity.name}>
            <List.Header>{activity.name}</List.Header>
            {activity.description}
          </List.Item>
        ))}
      />
      <p>{reminder}</p>
      <a href={url}>Visit the Park's Website for Further Details</a>
    </Container>
  );
}

export default TripSuggestion;
