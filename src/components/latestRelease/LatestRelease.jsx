import React, { useEffect, useRef, useState } from 'react';
import SingleBook from '../card/SingleBook';
import { Alert, Col, Container, Row, Spinner } from 'react-bootstrap';
import { nanoid } from 'nanoid';
import { allBooks, getBooks, isBookLoading } from '../../reducers/booksReducer';
import { useDispatch, useSelector } from 'react-redux';
import CommentArea from '../CommentArea/CommentArea';
import { isCommentsLoading } from '../../reducers/comment/commentReducer';
// import Fantasy from '../../data/fantasy.json';

function LatestRelease() {

  const dispatch = useDispatch()
  const bookLoading = useSelector(isBookLoading)
  const commentLoading = useSelector(isCommentsLoading)
  const booksFromApi = useSelector(allBooks)
  const inputValue = useSelector((state) => state.input.inputValue)

  const [selectedBook, setSelectedBook] = useState(null);
  const colRef = useRef(null)

  const filteredBooks = booksFromApi.slice(0,8).filter((book) =>
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
            {bookLoading && <Spinner animation="grow" />}
            {!bookLoading && filteredBooks.length === 0 ? (
                <Col>
                  <Alert variant='warning'>Ooops! Non è stato trovato nessun libro. Riprova la ricerca inserendo altri dati.</Alert>
                </Col>
              ) : (
            filteredBooks.map((book) => (
              <Col key={nanoid()} xs={6} lg={4} ref={colRef} className='mb-4'>
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
            )))}
            </Row>
          </Col>
          <Col lg={4}>
          {commentLoading && <Spinner animation="grow" />}
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