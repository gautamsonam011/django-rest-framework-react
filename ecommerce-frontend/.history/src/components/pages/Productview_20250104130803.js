import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom';
import {Row, Col, Image, ListGroup, Button, Card, Container} from 'react-bootstrap';
import axios from 'axios';

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
                <Image src={productView.image} alt={productView.name} fluid/>
                </Col>
            </Row>
        </div>
    </Container>
    </>
  )
}

export default Productview
