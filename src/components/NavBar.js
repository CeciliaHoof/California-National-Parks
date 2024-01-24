import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import styled from "styled-components";

const PageTitle = styled(Menu.Header)`
  && {
    font-size: 40px;
    padding: 15px;
  }
`;
const StyledMenuContainer = styled.div`
  margin-top: -1em;
`;

function NavBar() {
  return (
    <StyledMenuContainer>
      <Menu text>
        <PageTitle>California's National Parks</PageTitle>
        <Menu.Menu size="small" position="right">
          <Menu.Item as={NavLink} to="/">
            Home
          </Menu.Item>
          <Menu.Item as={NavLink} to="/parks">
            Parks
          </Menu.Item>
          <Menu.Item as={NavLink} to="/trip-planner">
            Trip Planner
          </Menu.Item>
          <Menu.Item as={NavLink} to="/contact">
            Contact
          </Menu.Item>
        </Menu.Menu>
      </Menu>
   </StyledMenuContainer>
  );
}

export default NavBar;
