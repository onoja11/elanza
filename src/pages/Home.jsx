import React from 'react'
import Hero from '../components/Hero.jsx'
import CoreFeatures from '../components/CoreFeatures.jsx'
import FeaturedCreators from '../components/FeaturedCreators.jsx'
import CuratedCollections from '../components/CuratedCollections.jsx' // Formerly FashionCategory
import ServicesOverview from '../components/ServicesOverview.jsx' // Formerly Services
import SuppliersPreview from '../components/SuppliersPreview.jsx'
import CultureHubPreview from '../components/CultureHubPreview.jsx'
import CommunityPreview from '../components/CommunityPreview.jsx'
import FinalCTA from '../components/FinalCTA.jsx'

const Home = () => {
  return (
    <>
      <Hero />
      <CoreFeatures />
      <FeaturedCreators />
      <CuratedCollections/>
      <ServicesOverview/>
      <SuppliersPreview/>
      <CultureHubPreview/>
      <CommunityPreview/>
      <FinalCTA/>
    </>
  )
}

export default Home