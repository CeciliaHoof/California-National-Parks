import { Comment, Header, Segment } from "semantic-ui-react";
import { useState } from "react";
import Review from "./Review";
import ParkReviewForm from "./ParkReviewForm";

function ParkReviews({ park }) {
  const [reviews, setReviews] = useState(park.reviews);

  const reviewDisplay = reviews.map((review) => (
    <Review key={review.id} review={review} />
  ));

  return (
    <Segment.Group horizontal>
      <Segment>
      <Header as="h3">Submit a Review of the Park:</Header>
        <ParkReviewForm park={park}/>
      </Segment>
      <Segment>
        <Comment.Group>
          <Header as="h3"> Reviews </Header>
          {reviewDisplay}
        </Comment.Group>
      </Segment>
    </Segment.Group>
  );
}
export default ParkReviews;
