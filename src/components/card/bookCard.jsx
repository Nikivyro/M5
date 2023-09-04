import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export class BookCard extends Component {
  render() {
    return (
        <Card id={this.props.asin}>
            <Card.Img variant="top" src={this.props.img} />
            <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>
                {this.props.category}
                {this.props.price}
                </Card.Text>
                <Button variant="primary">{this.props.btn}</Button>
            </Card.Body>
        </Card>
    )
  }
}

export default BookCard