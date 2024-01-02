import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Sidebar from './Components/Sidebar/Sidebar'
import Cart from './Pages/Cart/Cart'
import Checkout from './Pages/Checkout/Checkout'
import ErrorPage from './Pages/ErrorPage'
import SingleProductPage from './Pages/SingleProductPage'
import ProductsPage from './Pages/Products/ProductsPage'


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
   <Route path='/products' element={<ProductsPage/>}/>
   <Route path='/products/:id' element ={<SingleProductPage/>}/>
   <Route path='/checkout' element={<Checkout/>}/>
   <Route path= '*' element = {<ErrorPage />} />
   </Routes>
   <Footer/>

   </>
  )
}

export default App

