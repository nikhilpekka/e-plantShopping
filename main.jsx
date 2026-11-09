import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { store } from './store';
import Navbar from './Navbar';
import App from './App';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

function Site() {
  return <><ScrollToTop/><Navbar/><Routes><Route path="/" element={<App/>}/><Route path="/plants" element={<ProductList/>}/><Route path="/cart" element={<CartItem/>}/><Route path="/about" element={<AboutUs/>}/><Route path="*" element={<App/>}/></Routes><footer className="site-footer"><div className="page-shell footer-content"><div><span className="footer-mark">✳ paradise<span>nursery</span></span><p>A little green makes everything better.</p></div><div className="footer-links"><Link to="/">Home</Link><Link to="/plants">Plants</Link><Link to="/about">Our Story</Link><Link to="/cart">Cart</Link></div><span className="footer-copyright">© {new Date().getFullYear()} Paradise Nursery. Made with love & leaves.</span></div></footer></>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><Provider store={store}><BrowserRouter><Site/></BrowserRouter></Provider></React.StrictMode>);
