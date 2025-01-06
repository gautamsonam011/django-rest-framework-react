import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card, Container, ListGroupItem } from 'react-bootstrap';
import axios from 'axios';
import Rating from './Rating';


function Productview({ params }) {
    const { id } = useParams();
    const [productView, setProductView] = useState([]);

    useEffect(() => {
        async function fetchProductsView() {
            const { data } = await axios.get(`/api/product/${id}`);
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
                            <Image src={productView.image} alt={productView.productname} fluid />
                        </Col>

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
                                <ListGroup.Item>Price: {productView.price} Rs</ListGroup.Item>
                                <ListGroup.Item>Description:{productView.productinfo}</ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Status:</Col>
                                        <Col>
                                            {productView.stockcount > 0 ? "In Stock" : "Out of Stock"}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Button className='btn-block' disabled={productView.stockcount == 0} type='button'>Add To Cart</Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>

                </div>
            </Container>
        </>
    )
}

export default Productview
