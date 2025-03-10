import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'; //useParams
import { Row, Col, Image, ListGroup, Button, Card, Container } from 'react-bootstrap';
// import axios from 'axios';
import Rating from './Rating';
import {ProductsListDetails} from '../../actions/productActions';

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
      dispatch(ProductsList())
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
                            <Image src={productView.image} alt={productView.productname} fluid />
                        </Col>

                        <Col md={4}>
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
                                <ListGroup.Item>Price: {productView.productbrand} </ListGroup.Item>
                                <ListGroup.Item>Description:{productView.productinfo}</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Price:</Col>
                                            <Col>
                                                <strong>{productView.price} Rs</strong>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Status:</Col>
                                            <Col>
                                                {productView.stockcount > 0 ? "In Stock" : "Out of Stock"}
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Button className='btn-block btn-info' disabled={productView.stockcount === 0} type='button'>Add to Cart</Button>
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
