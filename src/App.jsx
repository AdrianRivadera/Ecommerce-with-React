import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Portada from './Components/Portada'
import CardProducto from './Components/CardProducto'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from './Components/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer'
import Cart from './Components/Cart'
import CartContextProvider from './Components/CartContext'




function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<><Portada /><CardProducto /></>} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/category/:idCategory' element={<CardProducto />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App


