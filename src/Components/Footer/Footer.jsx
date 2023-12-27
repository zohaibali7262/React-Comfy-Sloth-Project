import React from 'react'

const Footer = () => {
  return (

    <div className='flex flex-col md:flex-row justify-center items-center
    text-center bg-black text-white h-20'>
    <h5 className="text-sm md:text-base font-normal">&copy; {new Date().getFullYear()} <span className='text-[#AB7A5F]'>Comfy Sloth</span></h5>
    <h2 className=" text-sm md:text-base m-1.5">All rights reserved</h2>
    </div>

  )
}

export default Footer