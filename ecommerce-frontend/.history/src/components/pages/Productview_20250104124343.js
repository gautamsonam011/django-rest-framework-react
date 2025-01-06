import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import {Row, Col, Image, ListGroup, Button, Card} from 'react-bootstrap';
import axios from 'axios';

function Productview() {
    const [productView, setProductView] = useState([]);

    useEffect(() => {

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
