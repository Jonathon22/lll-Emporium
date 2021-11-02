import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import getPaymentTypes from '../../helpers/data/paymentTypeData';
import { getOrderWithDetail, updateOrder } from '../../helpers/data/orderData';
import {
  OrderOuterDiv,
  OrderDataDetailDiv,
  OrderLineItemsDiv,
  OrderAddressPaymentDiv,
  InputLabel,
  OrderFormInput,
  OrderTransactionList,
  OrderTransactionLine,
  OrderTotalDue,
  OrderSubmitButton,
  OrderTotalPaymentsDiv
} from './OrderElements';

import {
  formatDate,
  calculateOrderSubtotal,
  calculateTotalPayments
} from '../../helpers/data/calculators';
import LineItemDetailCard from '../../components/Cards/OrderHistoryCards/LineItemDetailCard';
// import LineItemHistoryCard from '../../components/Cards/OrderHistoryCards/LineItemHistoryCard';

const OrderDetailView = ({
  orderId
}) => {
  const [order, setOrder] = useState(null);
  const [orderTotal, setOrderTotal] = useState('');
  const [lineItemsList, setLineItemsList] = useState([]);
  const [transactionList, setTransactionList] = useState([]);
  const [newTransaction, setnewTransaction] = useState({
    paymentAccount: '',
    paymentAmount: '0.0'
  });
  const [totalPayments, setTotalPayments] = useState('');
  const [options, setOptions] = useState([]);
  useEffect(() => {
    getOrderWithDetail(orderId)
      .then((resultObj) => {
        setOrder(resultObj.order);
        setLineItemsList(resultObj.lineItems);
        setTransactionList(resultObj.transactionItems);
      })
      .catch(() => console.warn('error'));
  }, [orderId]);

  useEffect(() => {
    const optionsArr = [];
    getPaymentTypes().then((resultArr) => {
      for (let i = 0; i < resultArr.length; i += 1) {
        const option = {
          value: resultArr[i].id,
          label: `${resultArr[i].paymentTypeName}`
        };
        optionsArr.push(option);
      }
      setOptions(optionsArr);
    })
      .catch(setOptions([]));
  }, []);

  useEffect(() => {
    if (order && lineItemsList) {
      setOrderTotal(calculateOrderSubtotal(order, lineItemsList));
    }
  }, [lineItemsList]);

  useEffect(() => {
    if (transactionList) {
      setTotalPayments(calculateTotalPayments(transactionList));
    }
  }, [transactionList]);

  const handleChange = (e) => {
    setOrder((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value ? e.target.value : ''
    }));
  };

  const handleTransactionChange = (e) => {
    setnewTransaction((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value ? e.target.value : ''
    }));
  };

  const handleSubmit = () => {
    updateOrder(order).then((response) => console.warn(response))
      .catch((err) => console.warn(err));
  };

  return (
    <>
    { order ? (
      <OrderOuterDiv>
        <div>
          <OrderDataDetailDiv>Order Number: {order.id}</OrderDataDetailDiv>
          <OrderDataDetailDiv>Order Date: {formatDate(order.orderDate)}</OrderDataDetailDiv>
        </div>
        <OrderLineItemsDiv>
          { lineItemsList ? lineItemsList.map((lineObj) => <LineItemDetailCard
            key={lineObj.id}
            lineItem={lineObj} />) : '' }
        </OrderLineItemsDiv>
        <OrderAddressPaymentDiv>
          <InputLabel for='shippingAddress'>Street Address</InputLabel>
          <OrderFormInput
            type='text' name='shippingAddress' value={order.shippingAddress}
            label='shippingAddress' onChange={handleChange}/>
          <InputLabel for='shippingCity'>City</InputLabel>
          <OrderFormInput
            type='text' name='shippingCity' value={order.shippingCity}
            label='shippingCity' onChange={handleChange}/>
          <InputLabel for="shippingState">State</InputLabel>
          <OrderFormInput
            type='text' name='shippingState' value={order.shippingState}
            label='shippingState' onChange={handleChange}/>
          <InputLabel for='shippingZip'>Zip Code</InputLabel>
          <OrderFormInput
            type='text' name='shippingZip' value={order.shippingZip}
            label='shippingZip' onChange={handleChange}/>
          <InputLabel for='paymentType'>Payment Type</InputLabel>
          <Select
          options={options} />
          <InputLabel for='paymentAccount'>Account Number</InputLabel>
          <OrderFormInput
            type='text' name='paymentAccount' value={newTransaction.paymentAccount}
            label='paymentAccount' onChange={handleTransactionChange} />
          <InputLabel for='paymentAmount'>Payment Amount</InputLabel>
          <OrderFormInput
            type='text' name='paymentAmount' value={newTransaction.paymentAmount}
            label='paymentAmount' onChange={handleTransactionChange}/>
            <div>Past Payments</div>
          <OrderTransactionList>
            { transactionList.length ? (transactionList.map((transaction) => <OrderTransactionLine
              key={transaction.id}>
              {transaction.paymentAmount}
            </OrderTransactionLine>)) : '' }
          </OrderTransactionList>
          <div>Total Past Payments</div>
          <OrderTotalPaymentsDiv>
            {totalPayments}
          </OrderTotalPaymentsDiv>
          <OrderTotalDue>Balance Due: {'\u0024'}{orderTotal - totalPayments}</OrderTotalDue>
          <OrderSubmitButton onClick={handleSubmit}>Submit Order</OrderSubmitButton>
        </OrderAddressPaymentDiv>
      </OrderOuterDiv>
    ) : '' }
    </>
  );
};

OrderDetailView.propTypes = {
  orderId: PropTypes.string
};

export default OrderDetailView;