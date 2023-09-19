import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './SingleBook.css';
import CommentArea from '../CommentArea/CommentArea';

const SingleBook =({title, category, price, btn, img, asin}) => {
  
  const [selected, setSelected] = useState(false)

  const selectedBook = () => {
    setSelected((prevState) => !prevState);
  }

  return (
        <>
        <Card id={asin}
          className={selected ? 'selected' : ''}
          onClick={selectedBook}
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
        {selected && (
          <CommentArea bookId={asin} />
        )}
        
        </>
  )
}

export default SingleBook;