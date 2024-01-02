import React from 'react'
import PageHero from '../../Components/PageHero'
import ProductList from '../../Components/ProductList'
import Sort from '../../Components/Sort'
import Filters from '../../Components/Filters'
const ProductsPage = () => {
  return (
    <main>
      <PageHero title='products'/>
      <div className='page ' id='products'>
        <div className='section-center products'>
        <Filters />
        <div>
        <Sort />
          <ProductList />
          
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProductsPage