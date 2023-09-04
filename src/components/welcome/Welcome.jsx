import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../data/fantasy.json'

export class Welcome extends Component {
  render() {
    return (
      <div className='jumbotron'>
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