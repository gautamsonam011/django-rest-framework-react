import React, {useEffect, useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    async function fetchproducts() {
      const {data} = await axios.get('/api/products/');
      setProducts(data)
    }
    fetchproducts();
  }, [])
  return (
    <Container className='text-white'>
      <br/>
      <h1>Products</h1>
      <Row>
        {products.map((product)=>(
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <h3>{product.productname}</h3>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Home
