import React from 'react'
import { Link } from 'react-router-dom'
import heroBcg from '/src/assets/Images/about-img.jpeg'
import heroBcg2 from '/src/assets/Images/hero-bcg-2.jpeg'
const Hero = () => {
  return (
    <div className='container mx-auto' id='hero'>
      <article className='content'>
        <h1>
          design your <br />
          comfort zone
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias?
        </p>
        <Link to='/products' className='btn hero-btn'>
          shop now
        </Link>
      </article>
      <article className='img-container'>
        <img className='main-img' src={heroBcg} alt='nice table'/>
        <img src={heroBcg2} alt='person working' className='accent-img' />
      </article>
    </div>
  )
}

export default Hero