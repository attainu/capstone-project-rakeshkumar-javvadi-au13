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
import UserListDisplay from './Displays/UserListDisplay';
import UserEditDisplay from './Displays/UserEditDisplay';
import ProductListDisplay from './Displays/ProductListDisplay';
import ProductEditDisplay from './Displays/ProductEditDisplay';
import OrderListDisplay from './Displays/OrderListDisplay';
const App = () => {
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
          <Route path='/admin/userlist' component={UserListDisplay} />
          <Route path='/admin/user/:id/edit' component={UserEditDisplay} />
          <Route
            path='/admin/productlist'
            component={ProductListDisplay}
            exact
          />
          <Route
            path='/admin/productlist/:pageNumber'
            component={ProductListDisplay}
            exact
          />
          <Route
            path='/admin/product/:id/edit'
            component={ProductEditDisplay}
          />
          <Route path='/admin/orderlist' component={OrderListDisplay} />
          <Route path='/search/:keyword' component={HomeDisplay} exact />
          <Route path='/page/:pageNumber' component={HomeDisplay} exact />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={HomeDisplay}
            exact
          />
          <Route path='/' component={HomeDisplay} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
