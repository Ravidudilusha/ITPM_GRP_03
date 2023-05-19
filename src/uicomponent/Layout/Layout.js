import React from 'react'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import Routes from '../../uiroutes/Routers'
import { useSelector } from "react-redux";

const Layout = () => {

  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  return <div>
    <Header/>
    {showCart && <Carts />}
    <div>
      <Routes/>
    </div>
    <Footer/>
    </div>
  
}

export default Layout