import React, { Component } from 'react'
import Cart from '../components/Cart/Cart'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import SearchList from '../components/ProductDetails/SearchList'
import axios from 'axios';
import AppURL from '../api/AppURL'

export class SearchPage extends Component {

    constructor({match})
    {
        super();
        this.state={
            searchkey:match.params.searchkey,
            ProductData:[]
        }
    }

    componentDidMount(){
        window.scroll(0,0);
        axios.get(AppURL.ProductBySearch(this.state.searchkey)).then(response => {
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
 
         <SearchList data={this.state.searchkey} Product={this.state.ProductData} />
 
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

export default SearchPage