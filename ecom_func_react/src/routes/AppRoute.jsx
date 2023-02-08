import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router'
import ContactPage from '../pages/ContactPage'
import HomePage from '../pages/HomePage'
import UserLoginPage from '../pages/UserLoginPage'
import PurchasePage from '../pages/PurchasePage'
import ProductDetailsPage from '../pages/ProductDetailsPage'
import NotificationPage from '../pages/NotificationPage'
import FavouritePage from '../pages/FavouritePage'
import CartPage from '../pages/CartPage'
import ProductCategoryPage from '../pages/ProductCategoryPage'
import ProductSubCategoryPage from '../pages/ProductSubCategoryPage'
import AboutPage from '../pages/AboutPage'
import PrivacyPage from '../pages/PrivacyPage'
import RefundPage from '../pages/RefundPage'
import SearchPage from '../pages/SearchPage'
import RegisterPage from '../pages/RegisterPage'
import ForgetPasswordPage from '../pages/ForgetPasswordPage'
import ResetPage from '../pages/ResetPage'
import ProfilePage from '../pages/ProfilePage'
import axios from 'axios' 
import AppURL from '../api/AppURL'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import OrderListPage from '../pages/OrderListPage'

import FeaturedProduct from '../components/home/FeaturedProduct'

function AppRoute() {

    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get(AppURL.UserData).then(response => {
          setUser(response.data);
          console.log(response.data);
        }).catch(error => { 

        });
      });


  return (
    <>
        <Switch>
            <Route exact path="/" render={(props) => <HomePage {...props} key={Date.now()} />} />
            <Route exact path="/login" render={(props) => <UserLoginPage user={user} setUser={setUser} {...props} key={Date.now()} />} />
            <Route exact path="/profile" render={(props) => <ProfilePage user={user} setUser={setUser} {...props} key={Date.now()} />} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/forget" component={ForgetPasswordPage} />
            <Route exact path="/reset/:id" component={ResetPage} />
        </Switch>
    </>
  )
}

export default AppRoute