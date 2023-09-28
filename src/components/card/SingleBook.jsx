import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './SingleBook.css';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';

const SingleBook =({ asin, img, title, category, price, btn, onClick, isSelected }) => {
  
  return (
        <>
        <Card 
          id={asin}
          className={isSelected ? 'selected' : ''}
        >
            <Card.Img variant="top" src={img} onClick={onClick}/>
            <Card.Body>
                <Card.Title className='text-truncate'>{title}</Card.Title>
                <Card.Text>
                <Badge bg='secondary'>{category}</Badge>
                <h5>€ {price}</h5>
                </Card.Text>
                <Button>
                  <Link to={`/book/${asin}`} className='text-white text-decoration-none'>
                    <i className="bi bi-eye me-1"></i>
                    {btn}
                  </Link>
                </Button>
            </Card.Body>
        </Card>
        
        </>
  )
}

export default SingleBook;