import React, { useState, useEffect } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AppURL from '../../api/AppURL';
import axios from 'axios';
import FeaturedLoading from '../PlaceHolder/FeaturedLoading';

const FeaturedProduct = () => {

  const [ProductData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState("");
  const [mainDiv, setMainDiv] = useState("d-none");

  useEffect(() => {
    axios.get(AppURL.ProductListByRemark("Featured")).then(response => {
      setProductData(response.data);
      setIsLoading("d-none");
      setMainDiv("");
    }).catch(error => { });
  }, []);

  const FeaturedList = ProductData;
  const MyView = FeaturedList.map((FPList, i) => {
    return <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
      <Link className="text-link" to={"/productdetails/" + FPList.id} >
        <Card className="image-box card">
          <img className="center" src={FPList.image} />
          <Card.Body>
            <p className="product-name-on-card">{FPList.title}</p>
            <p className="product-price-on-card">Price : <strike className="text-secondary">{FPList.price} BDT</strike> {FeaturedList.special_price} BDT</p>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  });

  return (
    <div>
      <FeaturedLoading isLoading={isLoading} />
      <div className={mainDiv}>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55"><h2>FEATURED PRODUCT</h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>
          <Row>
            {MyView}
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default FeaturedProduct