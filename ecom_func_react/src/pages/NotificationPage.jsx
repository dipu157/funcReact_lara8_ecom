import React, { Component } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import Notifiation from '../components/Notification/Notifiation'

export class NotificationPage extends Component {

    componentDidMount(){
        window.scroll(0,0);
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

        <Notifiation />

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

export default NotificationPage
