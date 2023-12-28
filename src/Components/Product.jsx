import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { formatPrice } from '../Helper'
const Product = ({ image, name, price, id }) => {
  return (
    <div id='product' >
      <div className='container'>
        <img src={image} alt={name} />
        <Link to={`/products/${id}`} className='link'>
          <FaSearch />
        </Link>
      </div>
      <footer>
        <h5>{name}</h5>
         <p>{formatPrice (price) }</p>
      </footer>
    </div>
  )
}

export default Product