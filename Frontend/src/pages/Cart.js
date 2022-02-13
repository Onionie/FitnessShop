import React, { useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';
import Message from '../components/Message';
import { addToCart } from '../actions/cartActions';

const Cart = ({ history }) => {
  const params = useParams();
  const location = useLocation();
  const productId = params.id;

  const qty = Number(new URLSearchParams(location.search).get('qty'));
  console.log(qty);
  console.log(Boolean(productId));

  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  return <div>Cart</div>;
};

export default Cart;
