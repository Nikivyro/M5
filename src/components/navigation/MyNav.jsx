import React from "react";
import { connect } from "react-redux";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { updateInputValue } from "../../reducers/inputReducer";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";


const MyNav = ({ inputValue, updateInputValue  }) => {
  
  const handleButtonClick = () => {
      updateInputValue(inputValue);
  };
  
  return(
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand>
        <Link to='/' className="text-decoration-none text-dark">Epibooks</Link>        
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">            
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>About</Nav.Link>
          <Nav.Link>Browse</Nav.Link>              
        </Nav>
        </Navbar.Collapse>
          <div className="d-flex">
              <Form.Control
              type="text"
              value={inputValue}
              onChange={(e) => updateInputValue(e.target.value)}
              placeholder="Inserisci un valore"
            />
            <Button variant='primary' onClick={handleButtonClick}><i className='bi bi-search'></i></Button>
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