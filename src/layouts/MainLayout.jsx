import React from 'react'
import MyNav from '../components/navigation/MyNav'
import Footer from '../components/footer/MyFooter'

export default function MainLayout({children}) {
  return (
    <>
    <MyNav/>
      {children}
    <Footer/>
    </>
  )
}
