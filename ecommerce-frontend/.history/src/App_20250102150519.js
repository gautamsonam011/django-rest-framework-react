import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Account from './components/pages/Account'
import Cart from './components/pages/Cart'

function App() {
  return (
   <>
   <Router>
    <Header/>
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/" element={<Login/>}></Route>
      <Route exact path="/" element={<Account/>}></Route>
      <Route exact path="/" element={<Cart/>}></Route>
    </Routes>
    <Footer/>
   </Router>
   </>
  )
}

export default App
