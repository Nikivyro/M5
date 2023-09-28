import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import BookDetail from './pages/BookDetail';

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path="/book/:bookId" element={<BookDetail />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
  )
}