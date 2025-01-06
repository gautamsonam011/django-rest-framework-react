import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom';
import {Row, Col, Image, ListGroup, Button, Card, Container, ListGroupItem} from 'react-bootstrap';
import axios from 'axios';
import Rating from './Rating';


function Productview({params}) {
    const {id} = useParams();
    const [productView, setProductView] = useState([]);

    useEffect(() => {
        async function fetchProductsView() {
            const {data} = await axios.get(`/api/product/${id}`);
            setProductView(data);
        }
        fetchProductsView();
    }, []);
  return (
    <>
    <Container>
        <div>
            <Link to="/" className='btn btn-dark my-3'>
            Go Back 
            </Link>
            <Row>
                <Col md={6}>
                <Image src={productView.image} alt={productView.productname} fluid/>
                </Col>
            </Row>
            <Col md={3}>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <h4>{productView.productname}</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Rating
                    value={productView.rating}
                    text={`${productView.numView} reviews`}
                    color={"#f8e825"}
                    />
                </ListGroup.Item>
                <ListGroup.Item>Price: ${productView.price}</ListGroup.Item>
                <ListGroup.Item>Description:{productView.productinfo}</ListGroup.Item>
            </ListGroup>
            </Col>
        </div>
    </Container>
    </>
  )
}

export default Productview
