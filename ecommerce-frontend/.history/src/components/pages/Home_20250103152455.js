import React, {useEffect, useState} from 'react'
import { Container } from 'react-bootstrap';
import axios from 'axios';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    async function fetchproducts() {
      const data = await axios.get('/api/products/')
    }
    fetchproducts();
  })
  return (
    <Container>
      <h1>Products</h1>
    </Container>
  )
}

export default Home
