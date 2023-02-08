import React, { Component } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import Privacy from '../components/home/others/privacy'

export class PrivacyPage extends Component {
  render() {
    return (
      <>
            <div className="Desktop">
            <NavMenuDesktop />
            </div>
    
            <div className="Mobile">
              <NavMenuMobile />
            </div>
    
            <Privacy />
    
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

export default PrivacyPage