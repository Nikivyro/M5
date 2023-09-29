import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Welcome.css';
const Welcome = () => {
  return(
      <div className='jumbotron p-5 bg-dark text-white'>
        <Container>
            <Row>
                <Col>
                    <h1 className='text-uppercase mb-3'>Welcome to <span className='fw-bold'>Epi</span>books</h1>
                    <h3>Leggi che fa bene</h3>
                </Col>
            </Row>
        </Container>
      </div>
  )
}

export default Welcome