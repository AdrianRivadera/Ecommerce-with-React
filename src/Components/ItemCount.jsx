import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Swal from 'sweetalert2';


const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial))

  const decrease = () => {
    setCount(count - 1)
  }

  const increment = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial])

  const confirmarCompra = () => {
    Swal.fire(
      'AGREGADO AL CARRITO',
      '',
      'success'
    )
  }


  return (
    <Counter>
      <button disabled={count <= 0} onClick={decrease}>-</button>
      <span>{count}</span>
      <button disabled={count >= stock} onClick={increment}>+</button>
      <AgregarContainer>
        <button
          className='agregar'
          disabled={count <= 0}
          onClick={() => 
            {
              onAdd(count); 
              confirmarCompra()
            }}
        >
          Agregar al carrito
        </button>
      </AgregarContainer>
    </Counter>
  )
}

export default ItemCount

const Counter = styled.div`

  button{
    margin-bottom: 60px;
    width: 40px;
    height: 40px;
    background-color: #3483fa;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 2rem;
    cursor: pointer;
    @media(max-width: 768px){
            margin-bottom: 40px;
        }
    :disabled{
      background-color: #aeb0b4;
    }
    :hover{
      background-color: #1366e3;
      transition: .3s;
    }
  }
  span{
    margin: 0 10px;
    font-size: 2rem;
  }

`

const AgregarContainer = styled.div`
  .agregar{
    width: 90%;
    height: 50px;
    background-color: #3483fa;
    color: white;
    font-weight: 600;
    font-size: 1.1rem;
    border: none;
    border-radius: 10px;
    margin-bottom: 10px;
    @media(max-width: 768px){
      width: 100%;
      height: 60px;
    }
    :disabled{
      background-color: #aeb0b4;
    }
    :hover{
      background-color: #1366e3;
      transition: .3s;
    }
  }
`