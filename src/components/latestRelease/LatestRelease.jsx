import React, { useEffect, useState } from 'react';
import SingleBook from '../card/SingleBook';
import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { nanoid } from 'nanoid';
import { allBooks, getBooks } from '../../reducers/booksReducer';
import { useDispatch, useSelector } from 'react-redux';
import CommentArea from '../CommentArea/CommentArea';
import Fantasy from '../../data/fantasy.json';

function LatestRelease() {

  const dispatch = useDispatch()
  const booksFromApi = useSelector(allBooks)

  const [selectedBook, setSelectedBook] = useState(null);

  // const commentsFromApi = useSelector(allComments) 

  // const [searchText, setSearchText] = useState('');
  // const [filteredBooks, setFilteredBooks] = useState(booksFromApi);

  // const handleInputChange = (e) => {
  //   setSearchText(e.target.value);
  // };

  // const handleSearch = () => {
  //   const filtered = booksFromApi.slice(0, 6).filter(({ title }) =>
  //     title.toLowerCase().includes(searchText.toLowerCase())
  //   );
  //   setFilteredBooks(filtered);
  // };

  
  useEffect(() => {
    dispatch(getBooks())
  },[])
  
  
  return (
    <>
      <Container className="py-5">
        <Row>
          <Col lg={8}>
            <Row>
            {/* <Col xs={12}>
            <Form.Control
              type="text"
              placeholder="Cerca un libro..."
              name="searchText"
              value={searchText}
              onChange={handleInputChange}
              className="mb-5"
            />
            <button onClick={handleSearch}>Cerca</button>
          </Col> */}
          {Fantasy.map((book) => (
            <Col key={nanoid()} xs={6} md={4} lg={3}>
              <SingleBook
                asin={book.asin}
                img={book.img}
                title={book.title}
                category={book.category}
                price={book.price}
                btn="guarda"
                onClick={() => setSelectedBook(book)}
                isSelected={selectedBook?.asin === book.asin}
              ></SingleBook>
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