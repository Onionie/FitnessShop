import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header.js';
//import NavBar from './components/Navbar/NavBar';

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>{/* <Route path="/" element={<Header />} exact /> */}</Routes>
        </Container>
      </main>
    </Router>
  );
}

export default App;
