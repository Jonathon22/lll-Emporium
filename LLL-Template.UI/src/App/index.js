import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import { getCategories } from '../helpers/data/categoryData';
import { getProductTypes } from '../helpers/data/productTypesData';
import { getProducts } from '../helpers/data/ProductsData';
import Sidebar from '../components/Sidebar/Sidebar';
import { Footer } from '../components/Footer/Footer';
import Routes from '../helpers/Routes';
import NavBar from '../components/Navbar/NavBar';

export default function App() {
  const [categories, setCategories] = useState([]);
  const [productTypes, setProductTypes] = useState([]);
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        authed.getIdToken().then((token) => localStorage.setItem('token', token));
        setUser(authed);
        getCategories().then((categoryArray) => setCategories(categoryArray));
        getProductTypes().then((response) => setProductTypes(response));
        getProducts().then((response) => setProducts(response));
      } else if (user || user === null) {
        setUser(false);
        getCategories().then((categoryArray) => setCategories(categoryArray));
        getProductTypes().then((response) => setProductTypes(response));
        getProducts().then((response) => setProducts(response));
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} user={user} />
        <NavBar toggle={toggle} user={user}/>
        <Routes user={user} categories={categories} setCategories={setCategories} productTypes={productTypes} setProductTypes={setProductTypes} products={products} setProducts={setProducts}></Routes>
        <Footer />
      </Router>
    </div>
  );
}
