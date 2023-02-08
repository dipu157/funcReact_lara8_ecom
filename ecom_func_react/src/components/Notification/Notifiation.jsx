import React, { Component } from 'react'
import {Col, Container, Row, Card, Modal, Button } from 'react-bootstrap';
import AppURL from '../../api/AppURL';
import axios from 'axios';
import { Redirect } from 'react-router';

class Notifiation extends Component {

    constructor(){
        super();
        this.state={
             show:false,
             NotificationData: [],
             isLoading: "",
             mainDiv: "d-none",
             title:"",
             date:"",
             msg:""
        }
   }

   componentDidMount(){
    
    axios.get(AppURL.NotificationHistory).then(response => {
      this.setState({
        NotificationData: response.data
      });
      }
    ).catch(error => {
    });
}

    handleClose = () =>{
        this.setState({ show:false})
    };  

    handleShow = (e) => {
         this.setState({ show:true });
         let Ntitle = e.target.getAttribute("data-title");
         let Ndate = e.target.getAttribute("data-date");
         let Nmsg = e.target.getAttribute("data-msg");
         this.setState({title:Ntitle,date:Ndate,msg:Nmsg});
    };


  render() {

    if (!localStorage.getItem('token')) {
      return <Redirect to="/login" />
  }

    const Notifications = this.state.NotificationData;
    const MyView = Notifications.map((NotifData,i)=>{
      return <Col className=" p-1 " md={6} lg={6} sm={12} xs={12}>
      <Card className="notification-card">
          <Card.Body>
              <h6> {NotifData.title}</h6>
              <p className="py-1  px-0 text-primary m-0"><i className="fa  fa-bell"></i>   Date: {NotifData.date} | Status: Unread</p>
            <Button onClick={this.handleShow} data-title={NotifData.title} data-date={NotifData.date} data-msg={NotifData.message} className='btn btn-danger'>Details</Button>
          </Card.Body>
      </Card>
  </Col>
    });


    return (
      <>
        <Container className="TopSection">
            <Row>               
                {MyView}
            </Row>
        </Container>

        <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
           <h6><i className="fa fa-bell"></i> Date:{this.state.date}</h6>
        </Modal.Header>
        <Modal.Body>
             <h6>{this.state.title}</h6>
             <p>
             {this.state.msg}
             </p>          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>

      </>
    )
  }
}

export default Notifiation
