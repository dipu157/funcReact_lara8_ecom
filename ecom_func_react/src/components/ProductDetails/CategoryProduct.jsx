import React, { Component } from 'react'
import { Breadcrumb, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export class CategoryProduct extends Component {
  render() {
    const MyList = this.props.Product;
    const Category = this.props.Category;
    const MyView = MyList.map((FPList, i) => {
      return <Col className='p-1' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
        <Link className="text-link" to={"/productdetails/" + FPList.id} >
        <Card className="image-box card w-100">
          <img className='center w-75' src={FPList.image} />
          <Card.Body>
            <p className='product-name-on-card' >{FPList.title}</p>
            <p className='product-price-on-card' >Price: {FPList.price} BDT</p>
          </Card.Body>
        </Card>
        </Link>
      </Col>
    });


    return (
      <div>
        <Container className="text-center">
        <div className="breadbody">
            <Breadcrumb>
              <Breadcrumb.Item> <Link to="/"> Home </Link> </Breadcrumb.Item>
              <Breadcrumb.Item> <Link to={"/productcategory/"+Category}> {Category} </Link> </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className='section-title text-center mb-55'>
            <h2>{Category}</h2>
            <p>Some of our Exclusive Collection</p>
          </div>
          <Row>
            {MyView}

          </Row>
        </Container>
      </div>
    )
  }
}

export default CategoryProduct