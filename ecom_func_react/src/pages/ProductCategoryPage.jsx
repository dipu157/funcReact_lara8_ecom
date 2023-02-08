import React, { Component } from 'react'
import Cart from '../components/Cart/Cart'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import CategoryProduct from '../components/ProductDetails/CategoryProduct'
import axios from 'axios';
import AppURL from '../api/AppURL'

export class ProductCategoryPage extends Component {

    constructor({match})
    {
        super();
        this.state={
            Category:match.params.Category,
            ProductData:[]
        }
    }

    componentDidMount(){
        window.scroll(0,0);
        axios.get(AppURL.ProductListByCategory(this.state.Category)).then(response => {
            this.setState({ProductData:response.data});
          }).catch(error => {
          });
      }

  render() {
    return (
      <>
       <div className="Desktop">
        <NavMenuDesktop />
        </div>

        <div className="Mobile">
          <NavMenuMobile />
        </div>

        <CategoryProduct Category={this.state.Category} Product={this.state.ProductData} />

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

export default ProductCategoryPage