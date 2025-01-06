import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card} from 'react-bootstrap';
import axios from 'axios';
import Product from './Product';
import { listProduct } from '../../actions/productActions';
import {useDispatch, useSelector} from 'react-redux';

function Home() {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  // const [products, setProducts] = useState([]);
  // const [productview, setProductView] = useState([]);
  const {error, loading, productview} = productList;


  useEffect(() => {
    // async function fetchproducts() {
    //   const { data } = await axios.get('/api/products/');
    //   setProducts(data);

    dispatch(listProduct())  
    }, [dispatch])

    async function fetchproductsview() {
      const { data } = await axios.get('/api/view-products/');
      setProductView(data);
    };

    fetchproducts();
    fetchproductsview();
  }, [])

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
      <Row>
        {productview.map((view) => (
          <Col key={view._id} sm={12} md={6} lg={4} xl={3}>
           <Product product={view}/>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Home
