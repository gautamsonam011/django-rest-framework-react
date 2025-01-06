import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'; //useParams
import { Row, Col, Image, ListGroup, Button, Card, Container } from 'react-bootstrap';
// import axios from 'axios';
import Rating from './Rating';
import {ProductsListDetails} from '../../actions/productActions';
import { useDispatch, useSelector } from 'react-redux';

function Productview({ params }) {
    // const { id } = useParams();
    // const [productView, setProductView] = useState([]);

    // useEffect(() => {
    //     async function fetchProductsView() {
    //         const { data } = await axios.get(`/api/product/${id}`);
    //         setProductView(data);
    //     }
    //     fetchProductsView();
    // }, []);

    const dispatch = useDispatch()
    const productDetail = useSelector((state) => state.productDetail);
    const { error, loading, product} = productDetail
  
  
    useEffect(() => {
      dispatch(ProductsListDetails())
    }, [dispatch]);
    
    return (
        <>
            <Container>
                <div>
                    <Link to="/" className='btn btn-dark my-3'>
                        Go Back
                    </Link>
                    <Row>
                        <Col md={4}>
                            <Image src={product.image} alt={product.productname} fluid />
                        </Col>

                        <Col md={4}>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <h4>{product.productname}</h4>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Rating
                                        value={product.rating}
                                        text={`${product.numView} reviews`}
                                        color={"#f8e825"}
                                    />
                                </ListGroup.Item>
                                <ListGroup.Item>Price: {product.productbrand} </ListGroup.Item>
                                <ListGroup.Item>Description:{product.productinfo}</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Price:</Col>
                                            <Col>
                                                <strong>{product.price} Rs</strong>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Status:</Col>
                                            <Col>
                                                {product.stockcount > 0 ? "In Stock" : "Out of Stock"}
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Button className='btn-block btn-info' disabled={product.stockcount === 0} type='button'>Add to Cart</Button>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>

                </div>
            </Container>
        </>
    )
}

export default Productview
