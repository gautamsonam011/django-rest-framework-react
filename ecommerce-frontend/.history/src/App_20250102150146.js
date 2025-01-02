import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'

function App() {
  return (
   <>
   <Router>
    <Header/>
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
    </Routes>
    <Footer/>
   </Router>
   </>
  )
}

export default App
