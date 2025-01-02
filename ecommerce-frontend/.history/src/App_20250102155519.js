import React from "react";
// import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {HashRouter as Router,Routes,Route} from 'react-router-dom'




export default function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
      </Routes>
      {/* <Routes>
        <Route exact path="/product/:id" element={<Product/>}></Route>
      </Routes> */}
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