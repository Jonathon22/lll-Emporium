import React from 'react';

const CartContext = React.createContext(0);
const CartProvider = CartContext.Provider;

export {
  CartContext,
  CartProvider
};
