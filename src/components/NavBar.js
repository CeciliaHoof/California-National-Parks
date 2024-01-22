import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

function NavBar() {
  return (
    <Menu className="menu">
      <div className="right menu">
        <NavLink
          to="/"
          className="item"
        >
          Home
        </NavLink>
        <NavLink
          to="/parks"
          className="item"
        >
          Parks
        </NavLink>
        <NavLink
          to="/contact"
          className="item"
        >
          Contact
        </NavLink>
        <NavLink
          to="/trip-planner"
          className="item"
        >
          Trip Planner
        </NavLink>
      </div>
    </Menu>
  );
};

export default NavBar;