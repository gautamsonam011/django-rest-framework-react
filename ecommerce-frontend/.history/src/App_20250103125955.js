import React from "react";
// import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Account from "./components/pages/Account";
import Cart from "./components/pages/Cart";


export default function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route exact path="/signup" element={<Account/>}></Route>
        <Route exact path="/cart" element={<Cart/>}></Route>
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}