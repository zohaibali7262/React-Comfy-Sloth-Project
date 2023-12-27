import React from 'react'
import logo from '/src/assets/Images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import CartButtons from '../../CartButtons'
import { links } from '../../Constant'
import { useProductsContext } from '../../Context/product_context'
// import { useUserContext } from '../context/user_context'

const Navbar = () => {

  const {openSidebar} = useProductsContext()

  return (
    <div id="nav_ctn">
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img src={logo} alt='comfy sloth' />
          </Link>
          <button type='button' className='nav-toggle' onClick={openSidebar}>
            <FaBars/>
          </button>
        </div>
        <ul className='nav-links'>
          {links.map((link) => {
            const { id, text, url } = link
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            )
          })}
        
        </ul>
        <CartButtons/>
      </div>
    </div>
  )
}

export default Navbar

