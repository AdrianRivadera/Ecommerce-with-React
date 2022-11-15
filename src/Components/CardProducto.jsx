import React from 'react'
import { useEffect, useState } from 'react';
import styled from 'styled-components'
import ListadoProductos from '../utils/ListadoProductos';
import customFetch from '../utils/customFetch';

import { FcLikePlaceholder } from "react-icons/fc"
import { BsCartPlus } from "react-icons/bs";
import { Routes, Route, Link, useParams } from 'react-router-dom';

const CardProducto = () => {



    return (
        <>
            <ContenedorCard>
                {
                    ListadoProductos.map(item => (

                        <Card
                            key={item.id}
                        >

                            <img src={item.img} alt="Foto Modelo" />
                            <h3>{item.nombre}</h3>
                            <p>{item.descripcion}</p>
                            <div>
                                <h2>$ {item.precio}</h2>
                                <div>
                                    <button className='corazon'><FcLikePlaceholder /></button>
                                    <button className='agregarCarrito'><BsCartPlus /></button>

                                </div>

                            </div>
                        </Card>


                    ))
                }
            </ContenedorCard>

        </>
    )
}

export default CardProducto

const ContenedorCard = styled.div`
    width: 70%;
    height: auto;
    margin: auto;
    margin-bottom: 100px;
    display: grid;
    grid-template-columns: auto auto auto;
    row-gap: 90px;
    @media(max-width: 768px){
        display: block;
        width: 90%;
    }

`

const Card = styled.div`
    margin: auto;
    width: 350px;
    height: 490px;
    border-radius: 10px 10px 10px 10px;
    background-color: #e3dddd;
    box-shadow: 0;
    transform: scale(0.95);
    transition: box-shadow 0.5s, transform 0.5s;
    &:hover{
    transform: scale(1);
    box-shadow: 8px 32px 52px rgba(0,0,0,0.2);
    }

    @media(max-width: 768px){
        width: 100%;

    }

    img{
        width: 100%;
        height: 320px;
        border-radius: 10px 10px 0px 0px;
        object-fit: cover;
    }
    .icon-like{
        font-size: 1.8rem;
        position: relative;
        top: 0px;
        left: 310px;
    }
    h3{
        font-size: 1.3rem;
        margin: auto;
        margin: 5px 0;
        text-transform: uppercase;
        font-weight: 400;
        text-align: center;
    }
    p{
        text-transform: uppercase;
        text-align: center;
        margin-top: 10px;
    }
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 16px 20px 0 20px;
        h2{
        text-align: center;
        font-weight: bold;
        }
        .agregarCarrito{
            font-size: 1.6rem;
            border: none;
            background-color: #95b593;
            border-radius: 50%;
            width: 46px;
            height: 46px;
            transition: .5s;
            cursor: pointer;
            &:hover{
                background-color: #53864f;
            }
        }
        .corazon{
            background-color: #fa8d8d;
            border-radius: 50%;
            font-size: 1.6rem;
            padding-top: 4px;
            width: 46px;
            height: 46px;
            border: none;
            margin-right: 6px;
            cursor: pointer;
            &:hover{
                transition: .5s;
                background-color: #fc4c4c;
            }
        }
        div{
            margin:  auto 5px;
        }
    }

`

