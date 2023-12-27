import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (

    <div className='page-100'>
    <section>
    <h1 className="">404</h1>
    <h3 className="">Sorry , the Page you tried cannot be found</h3>
    <Link to='/' className='btn'>back home</Link>
    
    </section>
    </div>
  )
}

export default ErrorPage