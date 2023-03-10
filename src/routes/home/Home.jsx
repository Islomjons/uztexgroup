import React from 'react'
import Energy from '../../components/energy/Energy'
import Products from '../../components/products/Products'
import Student from '../../components/student/Student'
import Technology from '../../components/technology/Technology'
import Uztex from '../../components/uztex/Uztex'
import BgImg from "../../components/bgImg/BgImg"
import News from '../../components/news/News'
import Mchj from '../../components/mchj/Mchj'

const Home = () => {
  return (
    <div>
        <Uztex />
        <Energy />
        <Products />
        <Technology />
        <Student />
        <BgImg />
        <News />
        <Mchj />
    </div>
  )
}

export default Home