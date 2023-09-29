import React from 'react'
import { Link } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import { Alert, Button, Col, Container, Row } from 'react-bootstrap'

export default function ErrorPage() {
  return (
    <MainLayout>
      <Container className='min-vh-100'>
        <Row className='justify-content-center align-items-center'>
          <Col>
            <Alert variant="warning">Ooops la pagina che stai cerando non esiste.</Alert>
            <Button variant='primary'>
                <Link to='/' className='text-white text-decoration-none'><i className="bi bi-arrow-left me-1"></i>Torna alla home</Link>
            </Button>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  )
}
