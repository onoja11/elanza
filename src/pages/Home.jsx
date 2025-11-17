import React from 'react'
import Hero from '../components/Hero.jsx'
import FashionCategory from '../components/FashionCategory.jsx'
import Products from '../components/Products.jsx'
import Services from '../components/Services.jsx'
import Adverts from '../components/Adverts.jsx'

const Home = () => {
  return (
    <>
    <Hero />
    <FashionCategory/>
    <Products/>
    <Services/>
    <Adverts/>
    </>
  )
}

export default Home