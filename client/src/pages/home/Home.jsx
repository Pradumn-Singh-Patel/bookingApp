import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/feature/Featured'
import './Home.css'
import PropertyList from '../../components/propertyList/PropertyList'
// import FeaturedProperties from '../../components/FeaturedProperties/FeaturedProperties'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
        <h1 className="homeTitle">Trending Destination</h1>
          <Featured/>
          <h1 className="homeTitle">
            Property Type
          </h1>
          <PropertyList/>
          <h1 className="homeTitle">Frequent Booking</h1>
        {/* <FeaturedProperties/> */}
        <MailList/>
        <Footer/>
        </div>
    </div>
  )
}

export default Home