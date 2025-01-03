import React, {useState} from 'react'
import { Container } from 'react-bootstrap';

function Home() {
  const [products, setProducts] = useState([]);
  
  return (
    <Container>
      <h1>Products</h1>
    </Container>
  )
}

export default Home
