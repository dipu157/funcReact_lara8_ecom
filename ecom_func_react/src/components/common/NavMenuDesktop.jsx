import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Navbar, Row } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import Logo from '../../assets/images/easyshop.png';
import MegaMenuAll from '../home/MegaMenuAll';
import Bars from '../../assets/images/bars.png'
import axios from 'axios';
import AppURL from '../../api/AppURL';

function NavMenuDesktop(props) {

  const [sideNavState, setSideNavState] = useState("sideNavClose");
  const [contentOverstate, setContentOverstate] = useState("ContentOverlayClose");
  const [searchKey, setSearchKey] = useState("");
  const [searchRedirectStatus, setSearchRedirectStatus] = useState(false);
  const [cartCount, setcartCount] = useState(0);

  // useEffect(() => {
  //   let product_code = props.product_code;
  //   axios.get(AppURL.CartCount(product_code)).then((response) => {
  //     setcartCount(response.data)
  //   })
  // }, [product_code]);

  var logout = () => {
    localStorage.clear();
  }

  const SearchOnChange = (e) => {
    let SearchKey = e.target.value;
    setSearchKey(SearchKey);
  }

  const SearchOnClick = () => {
    if (searchKey.length > 2) {
      setSearchRedirectStatus(true);
    }
  }

  const searchRedirect = () => {
    if (searchRedirectStatus === true) {
      return <Redirect to={"/productbysearch/" + searchKey} />
    }
  }

  const MenuBarClickHandler = () => {
    SideNavOpenClose();
  }


  const ContentOverlayClickHandler = () => {
    SideNavOpenClose();
  }

  const SideNavOpenClose = () => {
    let SideNavState = SideNavState;
    let ContentOverstate = ContentOverstate;

    if (SideNavState === "sideNavOpen") {
      setSideNavState("sideNavClose");
      setContentOverstate("ContentOverlayClose");
    } else {
      setSideNavState("sideNavOpen");
      setContentOverstate("ContentOverlayOpen");
    }
  }

  let buttons;
  if (localStorage.getItem('token')) {
    buttons = (
      <div>
        <Link to="/cart" className='cart-btn'><i className='fa fa-shopping-cart'>  items</i></Link>
        <Link to="/profile" className='h4 btn'>PROFILE</Link>
        <Link to="/" onClick={logout} className='h4 btn'>LOGOUT</Link>
      </div>
    )

  } else {
    buttons = (
      <div>
        <Link to="/cart" className='cart-btn'><i className='fa fa-shopping-cart'> 0 items</i></Link>
        <Link to="/register" className='h4 btn'>REGISTER</Link>
        <Link to="/login" className='h4 btn'>LOGIN</Link>
      </div>
    )

  }




  return (
    <>
      <div className='TopSectionDown'>
        <Navbar fixed={'top'} className="navbar" bg='light'>

          <Container fluid={true} className="fixed-top shadow-sm p-2 mb-0 bg-white">
            <Row>
              <Col className="p-1 mt-1">
                <img onClick={MenuBarClickHandler} src={Bars} className='bar-img' />
                <Link to="/"><img className='nav-logo' src={Logo} /></Link>
              </Col>

              <Col className="p-1 mt-1">
                <div className="input-group w-100">
                  <input onChange={SearchOnChange} type="text" className="form-control" />
                  <Button onClick={SearchOnClick} type="button" className="btn site-btn">
                    <i className="fa fa-search"></i>
                  </Button>
                </div>
              </Col>

              <Col className="p-1 mt-1">
                <Link to="/notification" className="btn"> <i className='fa h4 fa-bell'></i>
                  <sup><span className="badge text-white bg-danger">5</span></sup>
                </Link>
                <Link to="/favourite" className="btn"> <i className='fa h4 fa-heart'></i>
                  <sup><span className="badge text-white bg-danger">3</span></sup>
                </Link>

              </Col>

              <Col className="p-1 mt-1" style={{ width: '700px', float: "right" }}>
                {buttons}
              </Col>

            </Row>
            {searchRedirect()}
          </Container>
        </Navbar>
      </div>

      <div className={sideNavState}>
        <MegaMenuAll />
      </div>

      <div onClick={ContentOverlayClickHandler} className={contentOverstate}>
      </div>
    </>
  )
}

export default NavMenuDesktop