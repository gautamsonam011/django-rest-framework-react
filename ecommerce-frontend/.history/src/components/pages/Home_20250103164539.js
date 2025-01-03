import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function Home() {
  const [products, setProducts] = useState([]);
  const [productview, setProductView] = useState([]);
  


  useEffect(() => {
    async function fetchproducts() {
      const { data } = await axios.get('/api/products/');
      setProducts(data);
    };

    async function fetchproductsview() {
      const { data_view } = await axios.get('/api/view-products/');
      setProductView(data_view);
    };

    fetchproducts();
    fetchproductsview();
  }, [])

  return (
    <Container className='text-white'>
      <br />
      <h1>Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <h3>{product.productname}</h3>
            <h6>{product.category}</h6>
            <h6>{product.price}</h6>
          </Col>
        ))}
      </Row>
      <Row>
        {productview.map((view) => (
          <Col key={view._id} sm={12} md={6} lg={4} xl={3}>
            <img src="{view.image}" alt="/" />
            <h3>{view.productname}</h3>
            <h6>{view.productbrand}</h6>
            <h6>{view.productcategory}</h6>
            <h6>{view.productinfo}</h6>
            <h6>{view.rating}</h6>
            <h6>{view.price}</h6>
            <h6>{view.stockcount}</h6>
            <h6>{view.createAt}</h6>
            <h6>{view.user}</h6>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Home
