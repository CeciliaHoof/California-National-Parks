import { Comment, Header, Segment } from "semantic-ui-react";
import { useState, useEffect } from "react";
import Review from "./Review";
import ParkReviewForm from "./ParkReviewForm";
import styled from "styled-components";

const ReviewsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
  margin-top: 25px;
`

const ReviewFormContainer = styled.div`
  width: 600px;
  margin-right: 30px;
  padding-left: 10px;
`
const Reviews = styled.div`
  width: 875px;
`

function ParkReviews({ park }) {
  const [reviews, setReviews] = useState(park.reviews);

  useEffect(() => {
    fetch(`http://localhost:8001/parks/${park.id}?_embed=reviews`)
      .then((resp) => resp.json())
      .then((data) => setReviews(data.reviews));
  }, []);

  if (!reviews) {
    return <h1>Loading</h1>;
  }
  function handleNewReview(review) {
    setReviews([review, ...reviews]);
  }

  return (
      <>
      <ReviewsContainer>
        <ReviewFormContainer>
        <h3>Reviews of {park.fullName}</h3>
        <ParkReviewForm parkId={park.id} onReviewSubmit={handleNewReview} />
        </ReviewFormContainer>
        <Reviews>
        <Comment.Group>
          {reviews.map((review) => (
            <Review key={review.id} review={review} />
          ))}
        </Comment.Group>
        </Reviews>
      </ReviewsContainer>
      </>
  );
}
export default ParkReviews;
