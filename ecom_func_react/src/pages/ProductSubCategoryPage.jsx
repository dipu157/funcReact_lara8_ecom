import React, { Component } from 'react'
import Cart from '../components/Cart/Cart'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import SubCategoryProduct from '../components/ProductDetails/SubCategoryProduct'
import axios from 'axios';
import AppURL from '../api/AppURL'

export class ProductSubCategoryPage extends Component {

    constructor({match})
    {
        super();
        this.state={
            Category:match.params.Category,
            SubCategory:match.params.SubCategory,
            ProductData:[]
        }
    }

    componentDidMount(){
        window.scroll(0,0);
        axios.get(AppURL.ProductListBySubCategory(this.state.Category,this.state.SubCategory)).then(response => {
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

        <SubCategoryProduct Category={this.state.Category} SubCategory={this.state.SubCategory} Product={this.state.ProductData} />

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

export default ProductSubCategoryPage