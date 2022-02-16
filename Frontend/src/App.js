import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import Accessories from './pages/Accessories';
import Equipment from './pages/Equipment';
import Supplements from './pages/Supplements';
import SpecificProduct from './pages/SpecificProduct.js';
import Cart from './pages/Cart.js';
import Login from './pages/Login.js';

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/supplement" element={<Supplements />} />
            <Route path="/accessories/:id" element={<SpecificProduct />} />
            <Route path="/equipment/:id" element={<SpecificProduct />} />
            <Route path="/supplement/:id" element={<SpecificProduct />} />
            <Route path="/cart">
              <Route path=":id" element={<Cart />} />
              <Route path="" element={<Cart />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
