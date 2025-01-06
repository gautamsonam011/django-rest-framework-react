import React from 'react'
import {Card} from "react-bootstrap";
import Rating from './Rating';
import {Link} from "react-router-dom";

function Product(props) {
  return (
    <>
    <Card className='my-3 p-3 rounded'>
        <Link to={'/product/$'} />
    </Card>
    </>
    
  )
}

export default Product
