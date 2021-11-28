/* eslint-disable no-shadow */
import React, { useState, useEffect, useRef } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import { getCategories } from '../helpers/data/categoryData';
import { getProductTypes } from '../helpers/data/productTypesData';
import { getProducts } from '../helpers/data/productData';
import Sidebar from '../components/Sidebar/Sidebar';
import { Footer } from '../components/Footer/Footer';
import Routes from '../helpers/Routes';
import NavBar from '../components/Navbar/NavBar';
import { getUserWithRoleByEmail } from '../helpers/data/userData';
import { getShoppingCart } from '../helpers/data/orderData';
import { getLineItemsByOrderId } from '../helpers/data/lineItemData';
import { calculateCartCount } from '../helpers/data/calculators';
import { CartProvider } from '../helpers/cartContext';

export default function App() {
  const [categories, setCategories] = useState([]);
  const [productTypes, setProductTypes] = useState([]);
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [cartId, setCartId] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const countRef = useRef();
  countRef.current = setCartCount;
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userObj) => {
      if (userObj) {
        userObj.getIdToken().then((token) => sessionStorage.setItem('token', token));
        getUserWithRoleByEmail(userObj.email).then((responseObj) => {
          // getUserWithRoleByEmail can be called before a new
          // user is entered into the database due to a promise delay.
          // When the user is entered, useEffect will be called again
          // and we can set the user;
          if (responseObj !== '') {
            setUser(responseObj);
          } else setUser(false);
        });
        getCategories().then((categoryArray) => setCategories(categoryArray));
        getProductTypes().then((response) => setProductTypes(response));
        getProducts().then((response) => setProducts(response));
      } else {
        setUser(false);
        getCategories().then((categoryArray) => setCategories(categoryArray));
        getProductTypes().then((response) => setProductTypes(response));
        getProducts().then((response) => setProducts(response));
      }
    });
  }, []);

  useEffect(() => {
    let mounted = true;
    if (user) {
      getShoppingCart(user.id).then((cart) => {
        if (cart.length !== 0 && cart.id != null) {
          setCartId(cart.id);
          getLineItemsByOrderId(cart.id)
            .then((itemList) => {
              setCartCount(calculateCartCount(itemList));
            })
            .catch(() => {
              setCartCount(0);
              setCartId(cart.id);
            });
        } else {
          setCartId('');
          setCartCount(0);
        }
      });
    } else {
      setCartId('');
      setCartCount(0);
    }
    return () => {
      mounted = false;
      return mounted;
    };
  }, [user]);

  return (
    <div className='App'>
      <CartProvider value={cartCount}>
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} user={user} />
        <NavBar toggle={toggle} user={user}
          cartId={cartId}/>
        <Routes user={user} setUser={setUser}
                categories={categories} setCategories={setCategories} productTypes={productTypes} setProductTypes={setProductTypes}
                products={products} setProducts={setProducts}
                ref={countRef}
                cartId={cartId} setCartId={setCartId}
        />
        <Footer />
      </Router>
      </CartProvider>
    </div>
  );
}
