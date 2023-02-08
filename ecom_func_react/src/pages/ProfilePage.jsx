import React, { useEffect } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import Profile from '../components/common/Profile'

const ProfilePage = ({user,setUser}) => {

  useEffect(() => {
    window.scroll(0,0);
  }, []);

  var user = user;
  var setUser = setUser;

  return (
    <>
        <div className="Desktop">
        <NavMenuDesktop />
        </div>

        <div className="Mobile">
          <NavMenuMobile />
        </div>

        <Profile user={user} setUser={setUser} />

        <div className="Desktop">
        <FooterDesktop />
        </div>

        <div className="Mobile">
          <FooterMobile />
        </div>
      </>
  )
}

export default ProfilePage
