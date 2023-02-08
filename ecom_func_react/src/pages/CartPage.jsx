import React, { Component } from 'react'
import Cart from '../components/Cart/Cart'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'

export class CartPage extends Component {

    componentDidMount(){
        window.scroll(0,0);
      }

  render() {
    const User = this.props.user;
    return (
      <>
       <div className="Desktop">
        <NavMenuDesktop />
        </div>

        <div className="Mobile">
          <NavMenuMobile />
        </div>

        <Cart user={User} />

        <div className="Desktop">
        <FooterDesktop />
        </div>

        <div className="Mobile">
          <FooterMobile />
        </div> 
      </>
    )
  }
}

export default CartPage