import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ProductsPage from '../components/ProductsPage';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listSupplements } from '../actions/productActions';

const Supplement = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listSupplements());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={4} key={product._id}>
              <ProductsPage product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Supplement;
