import { Comment } from "semantic-ui-react";
import styled from "styled-components";

const StyledComment = styled(Comment)`
  width: 870px;
`

function Review({ review }) {
  return (
      <StyledComment>
        <Comment.Content>
          <Comment.Author as="h5">{review.username}</Comment.Author>
          <Comment.Text>{review.title}</Comment.Text>
          <Comment.Text>{review.content}</Comment.Text>
        </Comment.Content>
      </StyledComment>
  );
}

export default Review;
