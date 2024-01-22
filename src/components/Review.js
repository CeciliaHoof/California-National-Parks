import { Comment, Segment } from "semantic-ui-react";
function Review({ review }) {
  return (
    <Segment>
      <Comment>
        <Comment.Content>
          <Comment.Author as="h5">{review.username}</Comment.Author>
          <Comment.Text as="h6">{review.title}</Comment.Text>
          <Comment.Text>{review.content}</Comment.Text>
        </Comment.Content>
      </Comment>
    </Segment>
  );
}

export default Review;
