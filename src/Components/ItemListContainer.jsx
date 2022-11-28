import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';



const ItemListContainer = ({
    clicked, handleClick
}) => {


    return (
        <>
            <Items>
                <div className={`links ${clicked ? 'active' : ''}`} onClick={handleClick}>
                    <Link className='offset'  to='/category/1'>Remeras</Link>
                    <Link className='offset' to='/category/2'>Buzos</Link>
                    <Link className='offset' to='/category/3'>Pantalones</Link>
                    <Link className='offset' to='/category/4'>Accesorios</Link>
                    <Link to='/cart' className='carrito offset' ><CartWidget /></Link>
                </div>
            </Items>
        </>
    )
}

export default ItemListContainer

const Items = styled.div`
    @media(min-width: 768px){
        margin-right: 80px;
        .links{
            .offset{
                text-decoration: none;
                font-size: 1.3rem;
                font-weight: 400;
                margin: auto;
                padding: 8px 16px;
                transition: .5s;
                &:hover,
                &:focus {
                    box-shadow: 
                        0 0 0 0 #2A5AA9,
                        inset 6em 3.5em 0 0 #2A5AA9;
                }
            }
        }
    }
    .offset{
        text-decoration: none;
    }
    .links{
        z-index: 98;
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


