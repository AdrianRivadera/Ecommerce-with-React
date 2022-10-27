import React from 'react'
import styled from 'styled-components'



const ItemListContainer = (props) => {
    return (
        <>
            <Items>
                <div className={`links ${props.clicked ? 'active' : ''}`}>
                    <a href="">Inicio</a>
                    <a href="">Productos</a>
                    <a href="">Sobre Nosotros</a>
                    <a href="">Carrito</a>
                </div>
            </Items>
        </>
    )
}

export default ItemListContainer



const Items = styled.div`
   a{
    text-decoration: none;
    margin-right: 3rem;
    font-size: 1rem;
    }
    .links{
        position: absolute;
        top: -700px;
        left: -2000px;
        right: 0;
        text-transform: uppercase;
        font-weight: bold;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        transition: all .5s ease;
        a{
            color: #ffffff;
            font-size: 1rem;
            display: block;
        }
        @media(min-width: 768px){
            position: initial;
            margin: 0;
            a{
                font-size: 1rem;
                color: white;
                display: inline;
            }
        }
    }
    .active{
        width: 100%;
        display: block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 30%;
        left: 0;
        right: 0;
        text-align: center;

        a{
            color: #ffffff;
            font-size: 1.5rem;
            margin-top: 1rem;
        }
        @media(min-width: 768px){
            position: initial;
            margin: 0;
            a{
                font-size: 1rem;
                color: white;
                display: inline;
            }
        }
    }
`


