import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation } from "react-router-dom";
import "./App.css";

function Navigation() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <Navbar expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="navitem" href="#home">
            Julia
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/" exact={true} activeClassName="active">
              <Nav.Link className="navitem">Projects</Nav.Link>
            </LinkContainer>
            <LinkContainer
              to="/otherwork"
              active={location.pathname.startsWith("/otherwork")}
              activeClassName="active"
            >
              <Nav.Link className="navitem">Other Work</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link className="navitem">About & Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
