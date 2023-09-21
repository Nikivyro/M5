import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './SingleBook.css';

const SingleBook =({title, category, price, btn, img, asin, onBookSelect}) => {
  
  const [isSelected, setIsSelected] = useState(false);

  const handleBookClick = () => {
    setIsSelected(!isSelected);
    onBookSelect({ title, category, price, img, asin });
  };

  const cardClass = isSelected ? 'selected-card' : '';

  return (
        <>
        <Card id={asin}
          onClick={handleBookClick}
          className={`single-book-card ${cardClass}`}
        >
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                {category}
                {price}
                </Card.Text>
                <Button variant="primary">{btn}</Button>
            </Card.Body>
        </Card>
        
        </>
  )
}

export default SingleBook;