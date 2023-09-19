import React, { useEffect, useState } from 'react';
import SingleBook from '../card/SingleBook';
import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { nanoid } from 'nanoid';
import { allBooks, getBooks } from '../../reducers/booksReducer';
import { useDispatch, useSelector } from 'react-redux';
import { allComments, getComments } from '../../reducers/commentReducer';


function LatestRelease() {

  const dispatch = useDispatch()
  const booksFromApi = useSelector(allBooks)

  // const commentsFromApi = useSelector(allComments) 

  // console.log(commentsFromApi)

  // console.log('Books', booksFromApi.asin)
  // console.log('Comments', commentsFromApi)
 

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
    // dispatch(getComments())
  },[])

  return (
    <>
      <Container className="py-5">
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
          {booksFromApi.map((book) => (
            <Col key={nanoid()} xs={6} md={4} lg={3}>
              <SingleBook
                asin={book.asin}
                img={book.img}
                title={book.title}
                category={book.category}
                price={book.price}
                btn="guarda"
              ></SingleBook>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default LatestRelease;