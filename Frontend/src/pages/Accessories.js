import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductsPage from '../components/ProductsPage';
import accessoriesProducts from '../data/AccessoriesProducts';

const HomeScreen = () => {
  return (
    <>
      <Row>
        {accessoriesProducts.map((product) => (
          <Col sm={12} md={6} lg={4} xl={4}>
            <ProductsPage product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
