import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>{/* <Route path="/" element={<Header />} exact /> */}</Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
