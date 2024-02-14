import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FaShoppingCart } from "react-icons/fa";

const Navbar1=()=> {
  return (
    <>
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Restaurant Landing Page</Navbar.Brand>
          <Nav className="ms-auto ">
          <Nav.Link href="#home">Landing</Nav.Link>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Gallery">Gallery</Nav.Link>
            <Nav.Link href="#Shop">Shop</Nav.Link>
            <Nav.Link href="#Blog">Blog</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Team">Team</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
            <Nav.Link href="#Cart"><FaShoppingCart /></Nav.Link>
            </Nav>
        </Container>
      </Navbar>
     
    </>
  )
}
export default Navbar1;