import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "../src/index.css"
import '../src/index.scss'
import {BrowserRouter} from 'react-router-dom'
import { ProductsProvider } from './Context/product_context.jsx'
import { FilterProvider } from './Context/filter_context.jsx'

// import { FilterProvider } from './context/filter_context';
// import { CartProvider } from './context/cart_context';
// import { UserProvider } from './context/user_context';
// import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ProductsProvider>
  <FilterProvider>
  <App />
  </FilterProvider>
  </ProductsProvider>
  </BrowserRouter>,
)
