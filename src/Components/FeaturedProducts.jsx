import React from 'react'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../Context/product_context'
import Loading from './Loading'
import Error from './Error'
import Product from './Product'

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext ()
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error/>
  }
  return (

    <div className='section' id='featured_products' >
      <div className='title'>
        <h2>featured products</h2>
        <div className='underline'></div>
      </div>
      <div className='section-center featured' >
        {featured.slice(0, 6).map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </div>
      <Link to='/products' className='btn'>
        all products
      </Link>
    </div>
  )
}

export default FeaturedProducts