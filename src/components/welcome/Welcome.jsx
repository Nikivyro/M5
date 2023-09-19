import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Welcome = () => {
  return(
      <div className='jumbotron p-5 bg-dark text-white'>
        <Container>
            <Row>
                <Col>
                    <h1>Welcome to Epicbooks</h1>
                </Col>
            </Row>
        </Container>
      </div>
  )
}

export default Welcome