import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { updateInputValue } from "../../reducers/inputReducer";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { handledarkMode } from "../../reducers/actions/darkModeAction";
import ReactLogo from '../../logo-epibook.svg';
const MyNav = ({ inputValue, updateInputValue  }) => {

  const dispatch = useDispatch();

  const mode = useSelector((state) => state.darkMode);
  const { isdarkMode } = mode;

  const switchDarkMode = () => {
    isdarkMode
      ? dispatch(handledarkMode(false))
      : dispatch(handledarkMode(true));
  };
  useEffect(() => {
    document.body.setAttribute("data-bs-theme", isdarkMode ? "dark" : "light");
    document.body.setAttribute("data-theme", isdarkMode ? "dark" : "light");
  }, [isdarkMode]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleButtonClick = () => {
    updateInputValue(searchQuery);
  };
  
  return(
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand>
        <Link to='/' className="text-decoration-none"><img src={ReactLogo} width={80} alt='EpiBooks'/></Link>        
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">            
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>About</Nav.Link>
          <Nav.Link>Browse</Nav.Link>              
        </Nav>
        </Navbar.Collapse>
          <Form.Group className="d-flex me-3">
            <Form.Control
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              placeholder="Cerca un libro"
            />
            <Button variant='primary' onClick={handleButtonClick}><i className='bi bi-search'></i></Button>
          </Form.Group>
          <>
            <div id="darkmode" className="position-relative">
              <Form.Control
                type="checkbox"
                className="checkbox z-n1 position-absolute"
                id="checkbox"
                onChange={switchDarkMode}
                checked={isdarkMode}
              />
              <label htmlFor="checkbox" className="label">
                {isdarkMode ? (
                  <>
                    <i className="bi bi-moon-stars-fill"></i>
                    <span className="icon-label">Dark</span>
                  </>
                ) : (
                  <>
                    <i className="bi bi-brightness-high-fill"></i>
                    <span className="icon-label">Light</span>
                  </>
                )}
                <div className="ball"></div>
              </label>
            </div>

          </>
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