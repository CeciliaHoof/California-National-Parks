import { Comment, Header, Segment } from "semantic-ui-react";
import { useState, useEffect } from "react";
import Review from "./Review";
import ParkReviewForm from "./ParkReviewForm";

function ParkReviews({ park }) {

  const [reviews, setReviews] = useState(park.reviews);

  useEffect(() => {
    fetch(`http://localhost:8001/parks/${park.id}?_embed=reviews`)
      .then(resp => resp.json())
      .then(data => setReviews(data.reviews))
  }, [])

  if(!reviews){
    return <h1>Loading</h1>
  }
  
  return (
    <Segment.Group horizontal>
      <Segment>
      <Header as="h3">Submit a Review of the Park:</Header>

        <ParkReviewForm parkId ={park.id}/>

      </Segment>
      <Segment>
        <Comment.Group>
          <Header as="h3"> Reviews </Header>
          {reviews.map((review) => (
          <Review key={review.id} review={review} />))}
        </Comment.Group>
      </Segment>
    </Segment.Group>
  );
}
export default ParkReviews;
