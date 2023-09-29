import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return(
    <footer className='bg-dark py-5 text-white'>
    <Container>
      <Row>
        <Col><p>&copy; 2023 Epicooks</p></Col>
      </Row>
    </Container>
  </footer>
  )
}

export default Footer;
