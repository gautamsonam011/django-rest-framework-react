import React from 'react'
import { Card } from "react-bootstrap";
import Rating from './Rating';
import { Link } from "react-router-dom";

function Product(props) {
    return (
        <>
            <Card className='my-3 p-3 rounded'>
                <Link to={`/product/${props._id}`}>
                    <Card.Img src={props.image} />
                </Link>
                <Card.Body>
                    <Link to={`/product/${props._id}`}>
                        <Card.Title as="div">
                            <strong>{props.productname}</strong>
                        </Card.Title>
                    </Link>
                </Card.Body>
            </Card>
        </>

    )
}

export default Product
