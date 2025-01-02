import React from "react";
// import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Navbar from "./components/Header";
import {HashRouter as Router,Routes,Route} from 'react-router-dom'
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Account from "./components/pages/Account";
import Cart from "./components/pages/Cart";



export default function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
      </Routes>
      <Routes>
        <Route exact path="/login" element={<Login/>}></Route>
      </Routes>
      <Routes>
        <Route exact path="/signup" element={<Account/>}></Route>
      </Routes>
      <Routes>
        <Route exact path="/cart" element={<Cart/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}