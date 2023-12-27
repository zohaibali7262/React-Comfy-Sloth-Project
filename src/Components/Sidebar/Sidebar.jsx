import React from 'react'
import logo from '/src/assets/Images/logo.svg'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import CartButtons from '../../CartButtons'
import { links } from '../../Constant'
import { useProductsContext } from '../../Context/product_context'
// import { useUserContext } from '../context/user_context'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext()
  // const { myUser } = useUserContext()
  return (
    <div id='sidebar'>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className='sidebar-header'>
          <img src={logo} className='logo' alt='coding addict' onClick={closeSidebar}/>
          <button className='close-btn' onClick={closeSidebar} >
            <FaTimes />
          </button>
        </div>
        <ul className='links'>
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar} >
                  {text}
                </Link>
              </li>
            )
          })}
          <li> <Link to='/checkout' onClick={closeSidebar} >Checkout</Link> </li>
         
        </ul>
        <CartButtons />
      </aside>
    </div>
  )
}

export default Sidebar