import React, {useEffect, useState} from 'react'
import { Container } from 'react-bootstrap';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    console.log(1);
  })
  return (
    <Container>
      <h1>Products</h1>
    </Container>
  )
}

export default Home
