import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export class Welcome extends Component {
  render() {
    return (
      <div className='jumbotron p-5 bg-dark text-white'>
        <Container>
            <Row>
                <Col>
                    <h1>Titolo</h1>
                </Col>
            </Row>
        </Container>
      </div>
    )
  }
}

export default Welcome