import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import Products from '../Products/Products'
import Product from '../Product/Product'
import Cart from '../redux/Cart/Cart'


const Routing = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>



    </Routes>
    </>
  )
}

export default Routing
