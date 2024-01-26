import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import styled from "styled-components";

const PageTitle = styled(Menu.Header)`
  font-size: 40px;
  padding: 15px;
`;
const StyledMenuContainer = styled.div`
  margin-top: -1em;
  padding-right: 5px;
`;

function NavBar() {
  return (
    <StyledMenuContainer>
      <Menu text>
        <PageTitle>National Parks of California</PageTitle>
        <Menu.Menu position="right">
          <Menu.Item className="custom-menu-item" as={NavLink} to="/">
            Home
          </Menu.Item>
          <Menu.Item className="custom-menu-item" as={NavLink} to="/parks">
            Parks
          </Menu.Item>
          <Menu.Item
            className="custom-menu-item"
            as={NavLink}
            to="/trip-planner"
          >
            Trip Planner
          </Menu.Item>
          <Menu.Item className="custom-menu-item" as={NavLink} to="/contact">
            Contact
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </StyledMenuContainer>
  );
}

export default NavBar;
