import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

function NavBar() {
  return (
    <Menu text>
      <Menu.Item header>California's National Parks</Menu.Item>
      <Menu.Menu size="small" position="right">
        <Menu.Item as={NavLink}
          to="/"
        >
          Home
        </Menu.Item>
        <Menu.Item as={NavLink}
          to="/parks"
        >
          Parks
        </Menu.Item>
        <Menu.Item as={NavLink}
          to="/trip-planner"
        >
          Trip Planner
        </Menu.Item>
        <Menu.Item as={NavLink}
          to="/contact"
        >
          Contact
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default NavBar;