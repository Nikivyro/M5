import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './SingleBook.css';
import { Link } from 'react-router-dom';

const SingleBook =({ asin, img, title, category, price, btn, onClick, isSelected }) => {
  
  return (
        <>
        <Card 
          id={asin}
          className={isSelected ? 'selected' : ''}
        >
            <Card.Img variant="top" src={img} onClick={onClick}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                {category}
                {price}
                </Card.Text>
                <Button>
                  <Link to={`/book/${asin}`}>
                        {btn}
                  </Link>
                </Button>
            </Card.Body>
        </Card>
        
        </>
  )
}

export default SingleBook;