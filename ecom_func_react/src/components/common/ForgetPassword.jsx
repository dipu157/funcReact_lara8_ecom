import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import forget from '../../assets/images/forget.jpg'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppURL from '../../api/AppURL';

function ForgetPassword() {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Forget Password Form Submit Method 
  const formSubmit = (e) => {
    e.preventDefault();
    const data={
         email:email                
    }

    axios.post(AppURL.UserForgetPassword,data).then(response =>{ 
         // console.log(response);
         setMessage({message:response.data.message})

         toast.success(message,{
              position: "top-right"
         });
         
    }).catch(error=>{
         this.setState({message:error.response.data.message})
         toast.error(setMessage,{
              position: "top-right"
         });
    }); 

}


  return (
    <div>
      <Container>
            <Row className="p-2">
                <Col className="shadow-sm bg-white mt-2" lg={12} md={12} sm={12} xs={12}>

                <Row className='text-center'>
                    <Col className='d-flex justify-content-center' lg={6} md={6} sm={12} xs={12}>

                        <Form className='onboardForm' onSubmit={formSubmit}>
                            <h2 className='section-title'>Forget Password</h2>
                            <input className='form-control m-2' type="email" placeholder="Enter Email" onChange={(e)=>{setEmail({email:e.target.value})}} />
                            <Button type='submit' className="btn btn-block m-2 site-btn-login">SEND</Button>
                            <br/><br/>
                            <hr />
                            <p>Have an Account ? <Link to="/login">Click Here</Link></p>
                        </Form>
                        
                    </Col>

                    <Col className='p-0 Desktop m-0' lg={6} md={6} sm={6} xs={6}>
                        <img className='onboardBanner' src={forget} />
                    </Col>
                </Row>


                </Col>
            </Row>

            
        </Container>
        <ToastContainer />
    </div>
  )
}

export default ForgetPassword