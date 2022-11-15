import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Portada from './Components/Portada'
import CardProducto from './Components/CardProducto'
import Favoritos from './Components/Favoritos'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from './Components/ItemListContainer'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<><Portada /><CardProducto /></>} />
        <Route path='/favoritos' element={<Favoritos />} />
        <Route path='/category/:idCategory' element={<CardProducto />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


