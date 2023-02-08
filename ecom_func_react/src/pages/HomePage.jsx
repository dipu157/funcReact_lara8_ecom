import React, { useEffect } from 'react'
import AppURL from '../api/AppURL'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import Categories from '../components/home/Categories'
import Collections from '../components/home/Collections'
import FeaturedProduct from '../components/home/FeaturedProduct'
import HomeTop from '../components/home/HomeTop'
import HomeTopMobile from '../components/home/HomeTopMobile'
import NewArrival from '../components/home/NewArrival'
import axios from 'axios'

function HomePage() {

  useEffect(() => {
    window.scroll(0,0);
    this.GetVisitorDetails();
  }, []);

  const GetVisitorDetails =()=>{
    axios.get(AppURL.VisitorDetails).then().catch()
  }


  return (
    <>
        <div className="Desktop">
        <NavMenuDesktop />
        <HomeTop />
        </div>

        <div className="Mobile">
          <NavMenuMobile />
          <HomeTopMobile />
        </div>
        
        <FeaturedProduct />
        <NewArrival />
        <Categories />
        <Collections />

        <div className="Desktop">
        <FooterDesktop />
        </div>

        <div className="Mobile">
          <FooterMobile />
        </div>
        
      </>
  )
}

export default HomePage