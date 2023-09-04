import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { nanoid } from "nanoid";

class MyNav extends Component {
    render(){
        return(
            <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    {this.props.links.map((link) =>(
                        <Nav.Link key={nanoid()} href={link.href}>{link.label}</Nav.Link>
                        )
                    )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        )
    }
}

export default MyNav