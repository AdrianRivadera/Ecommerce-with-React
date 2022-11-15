import React from 'react'
import styled from 'styled-components'
import Favoritos from './Favoritos';
import ListadoProductos from '../utils/ListadoProductos';
import { FiHeart } from "react-icons/fi"
import { FiShoppingCart } from "react-icons/fi";
import { Routes, Route, Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import customFetch from '../utils/customFetch';



const ItemListContainer = ({
    clicked,
    setClicked,
    props,
    Favoritos,
}) => {



    return (
        <>
            <Items>
                <div className={`links ${clicked ? 'active' : ''}`}>
                    <Link className='offset' to='/remeras'>Remeras</Link>
                    <Link className='offset' to='/pantalones'>Pantalones</Link>
                    <Link className='offset' to='/buzos'>Buzos</Link>
                    <Link className='offset' to='/accesorios'>Accesorios</Link>
                    <Link className='corazon offset' to='/favoritos'><FiHeart /></Link>

                    <a className='carrito offset' href=""><FiShoppingCart /></a>
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
            .corazon{
                margin-left: 80px;
                border: none;
                color: white;
                background-color: #3b82f6;
            }

            .corazon, 
            .carrito{
                font-size: 1.3rem;
                padding-top: 14px;

            }
        }
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


