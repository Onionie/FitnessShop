import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductsComponent from '../components/ProductsComponent';
import accessoriesProducts from '../data/AccessoriesProducts';

const HomeScreen = () => {
  return (
    <>
      <Row>
        {accessoriesProducts.map((product) => (
          <Col sm={12} md={6} lg={4} xl={4}>
            <ProductsComponent product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
