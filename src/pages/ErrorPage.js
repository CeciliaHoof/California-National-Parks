import { useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import { Header } from "semantic-ui-react";

const StyledHeader = styled(Header)`
    background-color: #6B7E8D;
`

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
    <StyledHeader>
        <NavBar />
    </StyledHeader>
    <main>
        <h1>Whoops! Something went wrong!</h1>
    </main>
    </>
  );
};

export default ErrorPage;