import React, { useEffect, useState } from 'react';
import FantasyBooks from '../../data/fantasy.json';
import SingleBook from '../card/SingleBook';
import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { nanoid } from 'nanoid';

function LatestRelease() {
  const [searchText, setSearchText] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    const filtered = FantasyBooks.slice(0, 6).filter(({ title }) =>
      title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  return (
    <>
      <Container className="py-5">
        <Row>
          <Col xs={12}>
            <Form.Control
              type="text"
              placeholder="Cerca un libro..."
              name="searchText"
              value={searchText}
              onChange={handleInputChange}
              className="mb-5"
            />
            <button onClick={handleSearch}>Cerca</button>
          </Col>
          {filteredBooks.map((book) => (
            <Col key={nanoid()} xs={6} md={4} lg={3}>
              <SingleBook
                id={book.id}
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