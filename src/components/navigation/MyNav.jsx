import React from "react";
import { connect } from "react-redux";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { nanoid } from "nanoid";
import { updateInputValue } from "../../reducers/inputReducer";

const MyNav = ({ links, inputValue, updateInputValue }) => {
  
  const handleInputChange = (e) => {
    updateInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    console.log(inputValue);
  };
  
  return(
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">Epibooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            {links.map((link) =>(
                <Nav.Link key={nanoid()} href={link.href}>{link.label}</Nav.Link>
                )
            )}
        </Nav>
        </Navbar.Collapse>
        <div>
            <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Inserisci un valore"
          />
          <button onClick={handleButtonClick}>Invia</button>
        </div> 
      </Container>
    </Navbar>
  )
}

const mapStateToProps = (state) => ({
  inputValue: state.input.inputValue,
});

const mapDispatchToProps = {
  updateInputValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyNav);