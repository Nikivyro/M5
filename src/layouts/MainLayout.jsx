import React from 'react'
import MyNav from '../components/navigation/MyNav'
import Footer from '../components/footer/MyFooter'
import { navData } from '../data/navData'

export default function MainLayout({children}) {
  return (
    <>
        <MyNav links={navData}/>
            {children}
        <Footer/>
    </>
  )
}
