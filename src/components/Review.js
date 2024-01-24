import { Comment } from "semantic-ui-react";
import styled from "styled-components";

const StyledComment = styled(Comment)`
width: 875px;
`
const StyledContent = styled(Comment.Content)`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  background-color: #fafafa;
`
const StyledAuthor = styled(Comment.Author)`
  text-decoration: underline;
`

function Review({ review }) {
  const { username, title, content} = review;
  
  return (
      <StyledComment>
        <StyledContent>
          <StyledAuthor as="h5">{username}</StyledAuthor>
          <Comment.Text><em>{title}</em></Comment.Text>
          <Comment.Text>{content}</Comment.Text>
        </StyledContent>
      </StyledComment>
  );
}

export default Review;
