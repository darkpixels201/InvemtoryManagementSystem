import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header/Header'
// import HeaderSliderOne from '../components/Slider/HeroSliderOne'
// import ProductScreen from './ProductScreen'

function Home() {
  return ( 
    <>
    <Link to="/dashboard"><h4 >Dashboard</h4></Link>
    <Link to="/login"><h4 >Login</h4></Link>
    <Link to="/searchbar"><h4 >Search Bar</h4></Link>
     {/* <Header /> */}
    {/* <HeaderSliderOne />
    <ProductScreen /> */}
    </> 
   
  )
}

export default Home