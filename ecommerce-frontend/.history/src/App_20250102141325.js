import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
   <>
   <div>
    <Header/>
    {/* <Container>
    <h1>Welcom Django E-Commerce</h1>
    </Container> */}
    <Footer/>
   </div>
   </>
  )
}

export default App
