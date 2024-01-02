import React from 'react'
import Product from '../Components/Product'



const GridView = ({ products }) => {
  return (
    <div id='grid_view'>
      <div className='products-container'>
        {products.map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </div>
    </div> 
  )
}

export default GridView 