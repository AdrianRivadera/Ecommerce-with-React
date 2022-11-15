import React from 'react'
import styled from 'styled-components'
import { BsTrash } from "react-icons/bs";


const Favoritos = () => {
  return (
    <>
      <ContenedorFavoritos>
        <h2>Tus Favoritos</h2>
          <ContenedorCardFavorito>
            <button><BsTrash /></button>
          </ContenedorCardFavorito>
      </ContenedorFavoritos>
    </>
  )
}

export default Favoritos

const ContenedorFavoritos = styled.div`
  width: 70%;
  height: auto;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  background-color: #3b82f6;

`

const ContenedorCardFavorito = styled.div`

`