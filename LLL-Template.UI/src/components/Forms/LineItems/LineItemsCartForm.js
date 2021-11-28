import React, { useState, useEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';

import {
  OrderLineItemsFormOuterDiv,
  OrderLineItemsUL,
  OrderLineItemsLI,
} from './LineItemsCartFormElements';
import CartLineItem from '../../Cards/OrderHistoryCards/CartLineItem';

const LineItemsCartForm = forwardRef(({
  order,
  user,
  lineItemsList,
  toggleQuantitiesUpdated,
  toggleLineItemRemoved,
  hasTransactions,
}, ref) => {
  const [formList, setFormList] = useState([]);
  // const [quantity, setQuantity] = useState([]);

  useEffect(() => {
    let mounted = true;
    if (mounted && lineItemsList) {
      setFormList(lineItemsList);
    }
    return () => {
      mounted = false;
    };
  }, [lineItemsList]);

  return (
    <OrderLineItemsFormOuterDiv>
      <OrderLineItemsUL>
        { formList.length ? formList?.map((lineObj) => <OrderLineItemsLI
          key={lineObj.id}>
          <CartLineItem
            user={user}
            order={order}
            lineItem={lineObj}
            toggleQuantitiesUpdated={toggleQuantitiesUpdated}
            toggleLineItemRemoved={toggleLineItemRemoved}
            hasTransactions={hasTransactions}
            ref={ref} />
          </OrderLineItemsLI>) : '' }
      </OrderLineItemsUL>
    </OrderLineItemsFormOuterDiv>
  );
});

LineItemsCartForm.displayName = LineItemsCartForm;

LineItemsCartForm.propTypes = {
  order: PropTypes.object,
  user: PropTypes.any,
  lineItemsList: PropTypes.array,
  toggleQuantitiesUpdated: PropTypes.func,
  toggleLineItemRemoved: PropTypes.func,
  hasTransactions: PropTypes.bool,
};

export default LineItemsCartForm;
