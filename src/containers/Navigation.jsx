import React from "react";
import { Nav, Navbar, Container, Badge } from "react-bootstrap";
import { BsBell, BsPersonFill } from "react-icons/bs";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" className="justify-content-between">
      <Container>
        <Nav>
          <Nav.Link href="#user">
            <BsPersonFill size={20} />
          </Nav.Link>
          <Nav.Link href="#dashboard">Dashboard</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#notifications">
            <BsBell size={20} />
            <Badge bg="danger">5</Badge>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;