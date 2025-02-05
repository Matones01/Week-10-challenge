import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Navigate
} from "react-router-dom";
import './App.css';
import Home from "./pages/home"
import Products from "./pages/products";
import Basket from "./pages/basket";
import Store from "./pages/store";
import { BasketProvider } from './components/basketcontext';
import logo from './images/logo.png'
import Bottom from './components/bottom';

function App() {
  return (
    <BasketProvider>
      <Router>
            <ul className='header-list'>
              <li>
                <Link to="/home">
                  <img className="logo" src={logo} />
                </Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/basket">Basket</Link>
              </li>
            </ul>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productid" element={<Store />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="*" element={<Error />} />
          </Routes>
      </Router>
      <Bottom></Bottom>
    </BasketProvider>
  )
}

export default App
