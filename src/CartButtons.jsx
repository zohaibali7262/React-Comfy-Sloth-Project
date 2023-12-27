import React from 'react'
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useProductsContext } from './Context/product_context'
// import { useCartContext } from '../context/cart_context'
// import { useUserContext } from '../context/user_context'

const CartButtons = () => {
  const { closeSidebar } = useProductsContext()
  // const { total_items, clearCart } = useCartContext()
  // const { loginWithRedirect, myUser, logout } = useUserContext()
  return (
    <div id='cart_btn'>
    <div className='cart-btn-wrapper'>
      <Link to='/cart' className='cart-btn' onClick={closeSidebar}>
        Cart
        <span className='cart-container'>
          <FaShoppingCart />
          <span className='cart-value'>12</span>
        </span>
      </Link>
    
        <button type='button' className='auth-btn' >
          Login <FaUserPlus />
        </button>
    </div>
    </div>
  )
}

export default CartButtons