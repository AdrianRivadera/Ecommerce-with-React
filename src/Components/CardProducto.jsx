import React from 'react'
import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom';
import { BsCartPlus } from "react-icons/bs";
import { firestoreFetch } from '../utils/firestoreFetch';


const CardProducto = () => {

    const [datos, setDatos] = useState([])
    const { idCategory } = useParams()

    useEffect(async () => {
        firestoreFetch(idCategory)
            .then(result => setDatos(result))
            .catch(err => console.console.log(err))
    }, [idCategory])
    

    useEffect(() => {
        return (() => {
            setDatos([]);
        })
    }, [])

    return (
        <>
            <ContenedorCard>
                {
                    datos.map(datos => (
                        <Card
                            key={datos.id}
                        >
                            <Link to={`/item/${datos.id}`} className='link'>
                                <img src={datos.img} alt="Foto Modelo" />
                                <h3>{datos.nombre}</h3>
                                <p>{datos.descripcion}</p>
                                <div>
                                    <h2>$ {datos.precio}</h2>
                                    <div>
                                        <button className='agregarCarrito'><BsCartPlus /></button>
                                    </div>
                                </div>
                            </Link>
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
    .link{
        text-decoration: none;
        color: black;
    }

    @media(max-width: 768px){
        width: 100%;
        transform: scale(0.95);
        transition: box-shadow 0.5s, transform 0.5s;
        &:hover{
            transform: none;
    
        }

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
        color: black;
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
        font-size: 2rem;
        text-align: center;
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
        div{
            margin:  auto 5px;
        }
    }

`


