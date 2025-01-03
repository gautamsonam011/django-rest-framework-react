import React from "react";
// import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {BrowserRouter,Routes,Route, useNavigate} from 'react-router-dom'
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Account from "./components/pages/Account";
import Cart from "./components/pages/Cart";


export default function App() {
  const navigate = useNavigate();
  return (
    <>
    <button onClick={() => navigate(-1)}>go back</button>
    <BrowserRouter>
    <Header />
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
    </BrowserRouter>
    </>
  );
}