import React, { useEffect } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import UserLogin from '../components/common/UserLogin'

function UserLoginPage() {

  useEffect(() => {
    window.scroll(0,0);
  }, []);


  return (
    <>
    <div className="Desktop">
    <NavMenuDesktop />
    </div>

    <div className="Mobile">
      <NavMenuMobile />
    </div>

    <UserLogin />

    <div className="Desktop">
    <FooterDesktop />
    </div>

    <div className="Mobile">
      <FooterMobile />
    </div>
  </>
  )
}

export default UserLoginPage