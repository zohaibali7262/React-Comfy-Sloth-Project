import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Products from './Pages/Products/Products'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Sidebar from './Components/Sidebar/Sidebar'
import Cart from './Pages/Cart/Cart'
import Checkout from './Pages/Checkout/Checkout'
import ErrorPage from './Pages/ErrorPage'
import SingleProductPage from './Pages/SingleProductPage'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>

   <Navbar/>
   <Sidebar/>
   <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/about' element={<About/>}/>
   <Route path='/cart' element={<Cart/>}/>
   <Route path='/products' element={<Products/>}/>
   <Route path='/products/:id' element ={<SingleProductPage/>}/>
   <Route path='/checkout' element={<Checkout/>}/>
   <Route path= '*' element = {<ErrorPage />} />
   </Routes>
   <Footer/>

   </>
  )
}

export default App

