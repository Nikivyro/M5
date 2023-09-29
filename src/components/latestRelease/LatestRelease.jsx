import React, { useEffect, useRef, useState } from 'react';
import SingleBook from '../card/SingleBook';
import { Alert, Button, Col, Container, Row, Spinner, Offcanvas } from 'react-bootstrap';
import { nanoid } from 'nanoid';
import { allBooks, getBooks, isBookLoading } from '../../reducers/booksReducer';
import { useDispatch, useSelector } from 'react-redux';
import CommentArea from '../CommentArea/CommentArea';
import CategoryFilter from '../CategoryFilter/CategoryFilter';

function LatestRelease() {
  const dispatch = useDispatch();
  const bookLoading = useSelector(isBookLoading);
  const booksFromApi = useSelector(allBooks);
  const inputValue = useSelector((state) => state.input.inputValue);

  const [selectedBook, setSelectedBook] = useState(null);
  const colRef = useRef(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const [selectedCategory, setSelectedCategory] = useState('all')
  const filteredBooks = booksFromApi.filter((book) => {
    if (selectedCategory === 'all') {
      return book.title.toLowerCase().includes(inputValue.toLowerCase());
    } else {
      return (
        book.category.toLowerCase() === selectedCategory &&
        book.title.toLowerCase().includes(inputValue.toLowerCase())
      );
    }
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const booksToDisplay = filteredBooks.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  const [showComments, setShowComments] = useState(false);

  const openComments = (book) => {
    setSelectedBook(book);
    setShowComments(true);
  };

  const closeComments = () => {
    setSelectedBook(null);
    setShowComments(false);
  };

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <>
      <Container className="py-5 allBooks">
        <Row>
          <Col lg={12}>
            <CategoryFilter
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />
            {bookLoading && <Spinner animation="grow" />}
            {!bookLoading && booksToDisplay.length === 0 ? (
              <Alert variant="warning">
                Ooops! Non è stato trovato nessun libro. Riprova la ricerca
                inserendo altri dati.
              </Alert>
            ) : (
              <Row>
                {booksToDisplay.map((book) => (
                  <Col key={nanoid()} xs={6} lg={3} ref={colRef} className="mb-4">
                    <SingleBook
                      asin={book.asin}
                      img={book.img}
                      title={book.title}
                      category={book.category}
                      price={book.price}
                      btn="guarda"
                      onClick={() => openComments(book)}
                      isSelected={selectedBook?.asin === book.asin}
                    />
                  </Col>
                ))}
              </Row>
            )}
            <Row className="pagination justify-content-center align-items-center">
              <Col>
                <Button onClick={handleFirstPage} disabled={currentPage === 1}>
                  <i className="bi bi-chevron-double-left"></i> Prima
                </Button>
              </Col>
              <Col>
                <Button onClick={handlePrevPage} disabled={currentPage === 1} className='mx-2'>
                  <i className="bi bi-chevron-left"></i> Precedente
                </Button>
              </Col>
              <Col>
                <span className="mx-3">
                  Pagina {currentPage} di {totalPages}
                </span>
              </Col>
              <Col>
                <Button onClick={handleNextPage} disabled={currentPage === totalPages} className='mx-2'>
                  Successivo <i className="bi bi-chevron-right"></i>
                </Button>
              </Col>
              <Col>
                <Button onClick={handleLastPage} disabled={currentPage === totalPages}>
                  Ultima <i className="bi bi-chevron-double-right"></i>
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Offcanvas show={showComments} onHide={closeComments} placement="end">
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {selectedBook && (
            <CommentArea title={selectedBook.title} bookId={selectedBook.asin} />
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default LatestRelease;