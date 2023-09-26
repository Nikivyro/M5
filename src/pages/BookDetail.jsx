import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getSingleBook, isBookLoading, singleBook } from '../reducers/booksReducer'
import MainLayout from '../layouts/MainLayout'
import { Col, Container, Row, Spinner } from 'react-bootstrap'

export default function BookDetail() {

    const dispatch = useDispatch()
    const bookFromApi = useSelector(singleBook)
    const bookLoading = useSelector(isBookLoading)
    const bookId = useParams()
    
    
    //console.log(bookId)

    useEffect(() => {
      dispatch(getSingleBook(bookId.bookId))
    }, [bookId.bookId, dispatch])
    
    // console.log(bookFromApi)

    // if (!bookFromApi[0]) {
    //     return null;
    // }

    return (
        <MainLayout>
            <Container>
                <Row>
                    <Col>
                        <Link to='/'>Torna alla home</Link>
                    </Col>
                </Row>
                {bookLoading && <Spinner animation="grow" />}
                {!bookLoading && bookFromApi[0] && (
                    <Row>
                        <Col>
                            <img src={bookFromApi[0].img} alt={bookFromApi[0].title} className='img-fluid'/>
                        </Col>
                        <Col>
                            <h1>{bookFromApi[0].title}</h1>
                            <span>{bookFromApi[0].asin}</span>
                            <span>{bookFromApi[0].category}</span>
                            <p>{bookFromApi[0].price}</p>
                        </Col>
                    </Row>
                    )
                }
                <p>Mancano i commenti del libro</p>
            </Container>
        </MainLayout>
    )
}
