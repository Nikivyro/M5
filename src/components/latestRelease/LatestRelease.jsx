import React, { Component } from 'react'
import FantasyBooks from '../../data/fantasy.json'
import BookCard from '../card/bookCard'
import { Col, Container, Row } from 'react-bootstrap'
import { nanoid } from 'nanoid'

export class LatestRelease extends Component {
  render() {
    return (
      <>
      <Container className='py-5'>
        <Row>
            {FantasyBooks.map((book) =>(
                <Col id={nanoid} xs={6} md={4} lg={3}>
                    <BookCard  
                        id={book.id}
                        img={book.img}
                        title={book.title}
                        category={book.category}
                        price={book.price}
                        btn="guarda"
                    ></BookCard>
                </Col>
            ))}
        </Row>
      </Container>
      </>
    )
  }
}

export default LatestRelease