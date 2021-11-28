import React, { forwardRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  BagDiv,
  BagImage,
  CartCountDiv
} from './CartIconsElements';
import bag from '../../Assets/NavBarIcons/bag.png';

const CartIcon = forwardRef(({
  cartId
}, ref) => {
  const history = useHistory();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setCartCount(ref.current);
    }
    return () => {
      mounted = false;
    };
  }, [ref.current]);

  const handleClick = () => {
    if (cartId !== '') {
      history.push(`/orders/${cartId}`);
    } else history.push('/emptyCart');
  };
  return (
    <>
    <BagDiv onClick={handleClick}>
      <BagImage src={bag} />
      <CartCountDiv>{cartCount}</CartCountDiv>
    </BagDiv>
    </>
  );
});

CartIcon.displayName = CartIcon;

CartIcon.propTypes = {
  cartCount: PropTypes.number,
  cartId: PropTypes.string
};

export default CartIcon;
