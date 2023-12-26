import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Products from './Pages/Products/Products'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Sidebar from './Components/Sidebar/Sidebar'
import Cart from './Pages/Cart/Cart'
import Checkout from './Pages/Checkout/Checkout'


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
   <Route path='/checkout' element={<Checkout/>}/>
   </Routes>
   <Footer/>

   </>
  )
}

export default App


