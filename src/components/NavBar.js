import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink
        to="/"
        className="nav-link"
      >
        Home
      </NavLink>
      <NavLink
        to="/parks"
        className="nav-link"
      >
        Parks
      </NavLink>
      <NavLink
        to="/contact"
        className="nav-link"
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default NavBar;