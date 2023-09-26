import React from 'react'
import { Link } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

export default function ErrorPage() {
  return (
    <MainLayout>
        <div><p>Ooops la pagina che stai cerando non esiste.</p></div>
        <Link to='/'>Torna alla home</Link>
    </MainLayout>
  )
}
