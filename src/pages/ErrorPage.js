import { useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import { Header } from "semantic-ui-react";

const StyledHeader = styled(Header)`
  background-color: #6b7e8d;
`;
const StyledMain = styled.main`
  text-align: center;
`;

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <StyledHeader>
        <NavBar />
      </StyledHeader>
      <StyledMain>
        <h1>Whoops! Something went wrong!</h1>
        <p>Try navigating to one of our other pages to get back on track.</p>
      </StyledMain>
    </>
  );
}

export default ErrorPage;
