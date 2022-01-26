import { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Badge, NavDropdown } from "react-bootstrap";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import "./NavLink.css";
import FavoritesContext from "./FavoritesCtx";

function NavLink() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <div>
      <Navbar className="header" expand="lg">
        <div className="title">
          <Link to="/">
            <BeachAccessIcon className="svg" /> TripPH
          </Link>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="Explore" className="ltext">
              <NavDropdown.Item as={Link} to="/adventure">
                Adventure
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/restaurant">
                Restaurant
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/hotels">
                Hotels
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="ltext" as={Link} to="/booking">
              Booking
              <Badge pill bg="danger">
                {favoritesCtx.totalFavorites}
              </Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavLink;
