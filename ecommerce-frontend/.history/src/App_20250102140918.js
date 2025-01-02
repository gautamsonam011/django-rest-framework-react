import React from 'react'
import { Container } from 'react-bootstrap'
import Navbar from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
   <>
   <div>
    <Navbar/>
    {/* <Container>
    <h1>Welcom Django E-Commerce</h1>
    </Container> */}
    <Footer/>
   </div>
   </>
  )
}

export default App
