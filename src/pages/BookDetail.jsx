import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getSingleBook, isBookLoading, singleBook } from '../reducers/booksReducer'
import MainLayout from '../layouts/MainLayout'
import { Badge, Button, Col, Container, Row, Spinner } from 'react-bootstrap'
import CommentArea from '../components/CommentArea/CommentArea'

export default function BookDetail() {

    const dispatch = useDispatch()
    const bookFromApi = useSelector(singleBook)
    const bookLoading = useSelector(isBookLoading)
    const bookId = useParams()
        
    //console.log(bookId)

    useEffect(() => {
      dispatch(getSingleBook(bookId.bookId))
    }, [bookId.bookId, dispatch])

    return (
        <MainLayout>
            <Container className='py-4'>
                <Row className='my-4'>
                    <Col>
                        <Button variant='primary'>
                            <Link to='/' className='text-white text-decoration-none'><i className="bi bi-arrow-left me-1"></i>Torna alla home</Link>
                        </Button>
                    </Col>
                </Row>
                {bookLoading && <Spinner animation="grow" />}
                {bookFromApi[0] && (
                    <Row className='my-4'>
                        <Col lg={4}>
                            <img src={bookFromApi[0].img} alt={bookFromApi[0].title} className='img-fluid'/>
                        </Col>
                        <Col lg={8}>
                            <h1>{bookFromApi[0].title}</h1>                            
                            <Badge bg='danger'>{bookFromApi[0].category}</Badge>
                            <hr></hr>
                            <small>asin: {bookFromApi[0].asin}</small>
                            <h4>€ {bookFromApi[0].price}</h4>
                        </Col>
                    </Row>
                    )
                }
                <CommentArea 
                    bookId={bookId} 
                    title={bookFromApi[0]?.title}
                />
            </Container>
        </MainLayout>
    )
}
