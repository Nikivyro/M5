import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { nanoid } from "nanoid";

const MyNav = ({links}) => {
  
  // Definisci uno stato per gestire il valore dell'input
  const [inputValue, setInputValue] = useState('');

  // Funzione per gestire il cambiamento dell'input
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Funzione per gestire il click del tasto
  const handleButtonClick = () => {
    // Fai qualcosa con il valore dell'input, ad esempio, stampalo in console
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

export default MyNav