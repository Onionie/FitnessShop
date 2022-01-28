import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <i
          class="fas fa-dumbbell fa-2x"
          style={{ color: 'white', margin: '0 10px' }}
        ></i>
        <Link to="/">
          <Navbar.Brand>FitnessShop</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/accessories">
                Accessories
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/equipment">
                Equipment
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/supplements">
                Supplements
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/cart">
              <i className="fas fa-shopping-cart"></i> Cart
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              <i className="fas fa-user"></i> Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
