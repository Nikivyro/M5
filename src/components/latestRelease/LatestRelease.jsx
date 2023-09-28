import React, { useEffect, useRef, useState } from 'react';
import SingleBook from '../card/SingleBook';
import { Col, Container, Row } from 'react-bootstrap';
import { nanoid } from 'nanoid';
import { allBooks, getBooks } from '../../reducers/booksReducer';
import { useDispatch, useSelector } from 'react-redux';
import CommentArea from '../CommentArea/CommentArea';
// import Fantasy from '../../data/fantasy.json';

function LatestRelease() {

  const dispatch = useDispatch()
  const booksFromApi = useSelector(allBooks)
  const inputValue = useSelector((state) => state.input.inputValue);

  const [selectedBook, setSelectedBook] = useState(null);
  const colRef = useRef(null)

  const filteredBooks = booksFromApi.filter((book) =>
    book.title.toLowerCase().includes(inputValue.toLowerCase())
  );
  
  useEffect(() => {
    dispatch(getBooks())
  },[dispatch])
  
  
  return (
    <>
      <Container className="py-5">
        <Row>
          <Col lg={8}>
            <Row>
            {filteredBooks.map((book) => (
              <Col key={nanoid()} xs={6} md={4} lg={3} ref={colRef}>
                <SingleBook
                  asin={book.asin}
                  img={book.img}
                  title={book.title}
                  category={book.category}
                  price={book.price}
                  btn="guarda"
                  onClick={() => setSelectedBook(book)}
                  isSelected={selectedBook?.asin === book.asin}
                />
              </Col>
            ))}
            </Row>
          </Col>
          <Col lg={4}>
          {selectedBook && (
            <CommentArea 
              title={selectedBook.title}
              bookId={selectedBook.asin} />
          )}
          </Col>
        </Row>
        <Row>

        </Row>
      </Container>
    </>
  );
}

export default LatestRelease;