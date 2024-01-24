import { Comment } from "semantic-ui-react";
import { useState, useEffect } from "react";
import Review from "./Review";
import ReviewForm from "./ReviewForm";
import styled from "styled-components";

const ReviewsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  padding: 10px;
  gap: 30px;
`;

const ReviewFormContainer = styled.div`
  width: 605px;
`;
const Reviews = styled.div`
  width: 875px;
`;

function ParkReviews({ park }) {
  const [reviews, setReviews] = useState(park.reviews);

  useEffect(() => {
    fetch(`http://localhost:8001/parks/${park.id}?_embed=reviews`)
      .then((resp) => resp.json())
      .then((data) => setReviews(data.reviews));
  }, [park.id]);

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
          <ReviewForm park={park} onReviewSubmit={handleNewReview} />
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
