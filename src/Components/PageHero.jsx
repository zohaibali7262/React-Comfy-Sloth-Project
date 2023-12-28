import React from 'react'
import { Link } from 'react-router-dom'
const PageHero = ({ title, product }) => {
  return (
    <div id='page-hero'>
      <div className='section-center max-w-full pl-4'>
        <h3>
          <Link to='/'>Home </Link>
          {product && <Link to='/products'>/ Products</Link>}/ {title}
        </h3>
      </div>
    </div>
  )
}

export default PageHero