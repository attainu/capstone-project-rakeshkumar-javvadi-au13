import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeDisplay from './Displays/HomeDisplay';
import ProductDisplay from './Displays/ProductDisplay';
import CartDisplay from './Displays/CartDisplay';
import loginDisplay from './Displays/loginDisplay';
import RegisterDisplay from './Displays/RegisterDisplay';
import ProfileDisplay from './Displays/ProfileDisplay';
import ShippingDisplay from './Displays/ShippingDisplay';
import PaymentDisplay from './Displays/PaymentDisplay';
import PlaceOrderDisplay from './Displays/PlaceOrderDisplay';
import OrderDisplay from './Displays/OrderDisplay';
function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/order/:id' component={OrderDisplay} />
          <Route path='/shipping' component={ShippingDisplay} />
          <Route path='/payment' component={PaymentDisplay} />
          <Route path='/placeorder' component={PlaceOrderDisplay} />
          <Route path='/login' component={loginDisplay} />
          <Route path='/register' component={RegisterDisplay} />
          <Route path='/profile' component={ProfileDisplay} />
          <Route path='/product/:id' component={ProductDisplay} />
          <Route path='/cart/:id?' component={CartDisplay} />
          <Route path='/' component={HomeDisplay} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
