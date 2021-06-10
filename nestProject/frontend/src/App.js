import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeDisplay from './Displays/HomeDisplay';
import ProductDisplay from './Displays/ProductDisplay';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeDisplay} exact />
          <Route path='/product/:id' component={ProductDisplay} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
