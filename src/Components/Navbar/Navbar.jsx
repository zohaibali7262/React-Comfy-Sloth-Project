import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
<nav className="bg-white fixed w-full z-20 top-0 start-0 ">
<div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4">
  <Link to='/'><img src="/src/assets/Images/logo.221f6b13e6eaaad5828372464f73a1a4.svg" className="w-44" alt="Logo"/></Link>
<div className="items-center justify-between hidden w-full md:flex md:w-auto " id="navbar-sticky">
  <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"> 
     <li>
      <Link href="#" className="text-base font-normal text-[#324D67] block p-2" aria-current="page" to="/">Home</Link> 
    </li>
    <li>
      <Link href="#" className="text-base font-normal text-[#324D67] block p-2" to='/about'>About</Link>
    </li>
    <li>
      <Link href="#" className="text-base font-normal text-[#324D67] block p-2" to='/products'>Products</Link>
    </li>
  </ul>
</div>

<div className="md:flex gap-6 hidden ">
<a href="" className='flex items-center text-2xl font-normal text-[#324D67] gap-1.5 relative'>Cart <img className='w-6' src="/src/assets/Images/cart.svg" alt="" /> <span className='absolute bg-[#ab7a5f] w-4 h-4 rounded-full p-3 text-white flex items-center justify-center text-sm -top-[10px] -right-[15px]'>0</span></a>
<button type='button' className="flex items-center text-2xl font-normal text-[#324D67] gap-1.5">Login <img src="/src/assets/Images/user.svg" className='w-6' alt=""/> </button>
</div>

<button type="button" className='md:hidden bg-transparent '>
<img src="/src/assets/Images/toggle.svg" className='w-[30px]' alt="" />
</button>

</div>
</nav>

    </div>
  )
}

export default Navbar