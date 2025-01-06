import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import {Row, Col, Image, ListGroup, Button, Card} from 'react-bootstrap';
import axios from 'axios';

function Productview({params}) {
    const [productView, setProductView] = useState([]);

    useEffect(() => {
        async function fetchProductsView() {
            const {data} = await axios.get(`/api/product/${params.id}`);
            setProductView(data);
        }
        fetchProductsView();
    }, []);
  return (
    <>
    <div>
      Product Detail
    </div>
    </>
  )
}

export default Productview
