import React, { useEffect } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import ForgetPassword from '../components/common/ForgetPassword'

export default function ForgetPasswordPage() {

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

        <ForgetPassword />

        <div className="Desktop">
        <FooterDesktop />
        </div>

        <div className="Mobile">
          <FooterMobile />
        </div>
      </>
  )
}
