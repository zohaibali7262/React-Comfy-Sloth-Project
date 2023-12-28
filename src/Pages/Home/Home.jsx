import React from 'react'
import Hero from '../../Components/Hero'
import Services from '../../Components/Services'
import Contact from '../../Components/Contact'
import FeaturedProducts from '../../Components/FeaturedProducts'
const Home = () => {
  return (
    <main >
      <Hero/>
      <FeaturedProducts/>
      <Services/>
      <Contact/>
    </main>
  )
}

export default Home