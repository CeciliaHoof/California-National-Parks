import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Header } from "semantic-ui-react";
import "./App.css"
import { styled, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    h1, h2, h3 {
        text-align: center;
    }
`
const StyledHeader = styled(Header)`
    background-color: #6B7E8D;
`
const StyledFooter = styled.footer`
    background-color: #6B7E8D;
    height: 55px;
    text-align: center;
`
function App(){


    return(
        <>
            <GlobalStyle />
            <StyledHeader>
                <NavBar />
            </StyledHeader>
            <Outlet />
        </>
    );
};

export default App
