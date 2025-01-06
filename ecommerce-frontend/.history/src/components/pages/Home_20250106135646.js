import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import Product from './Product';
import { ProductsList } from '../../actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import Message from "../pages/Message";
import Loader from "../pages/Loader";

function Home() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch()
  const { error, loading, productview } = useSelector((state) => state.productsList || {});


  useEffect(() => {
    dispatch(ProductsList())
  }, [dispatch]);

  console.log(productview)

  // useEffect(() => {
  //   async function fetchproducts() {
  //     const { data } = await axios.get('/api/products/');
  //     setProducts(data);

  //   };

  //   async function fetchproductsview() {
  //     const { data } = await axios.get('/api/view-products/');
  //     setProductView(data);
  //   };

  //   fetchproducts();
  //   fetchproductsview();
  // }, [])

  const safeProductView = Array.isArray(productview) ? productview : [];

  return (
    <Container className='text-white'>
      <br />
      <h1>Products</h1>
      {/* <Row>
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
            <Card 
            className="my-3 p-3 rounded" 
            style={{ backgroundImage: `url(${view.image})`, backgroundSize: 'cover', height: '200px' }}>
          </Card>
            <h4>{view.productname}</h4>
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
      </Row> */}
      {loading ? (
        <Loader /> // Show loader while data is loading
      ) : error ? (
        <Message variant="danger">{error}</Message> // Show error message if any
      ) : (
        <Row>
          {safeProductView.length > 0 ? (
            safeProductView.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))
          ) : (
            <h3>No products available</h3> // Show message if no products available
          )}
        </Row>
      )}

    </Container>
  )
}

export default Home
