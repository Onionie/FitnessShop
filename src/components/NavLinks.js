import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import "./NavLink.css";

function NavLink() {
  return (
    <div>
      <Navbar className="header" bg="dark" expand="lg">
        <div className="title">
          <Link to="/">
            <BeachAccessIcon className="svg" /> TripPH
          </Link>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="ltext" as={Link} to="/hotels">
              Hotels
            </Nav.Link>
            <Nav.Link className="ltext" as={Link} to="/adventure">
              Adventure
            </Nav.Link>
            <Nav.Link className="ltext" as={Link} to="/restaurant">
              Restaurant
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavLink;
