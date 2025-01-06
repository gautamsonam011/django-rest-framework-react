import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Account from './components/pages/Account';
import Cart from './components/pages/Cart';
import Productview from './components/pages/Productview';
// Protected route for authentication
function ProtectedRoute({ variable_code }) {
  const isAuthenticated = false; // Replace this with actual auth logic
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return variable_code;
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Account />} />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route exact path="/product/:id" element={<Productview/>}></Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}
