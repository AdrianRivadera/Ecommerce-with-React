import React from 'react'
import styled from 'styled-components'
import ImgPortada from '../assets/img-portada.jpg'

const Portada = () => {
    return (
        <>
            <ContenedorPortada>
                <PortadaTexto>
                    <h2>NUEVA COLECCIÓN <span>VERANO 2023</span></h2>
                    <p>3 cuotas sin interés - Envios a todo el pais.</p>
                    <button>Ver Todo</button>
                </PortadaTexto>
                <PortadaImg>
                    <img src={ImgPortada} alt="Modelo temporada  verano" />
                </PortadaImg>
            </ContenedorPortada>

        </>
    )
}

export default Portada

const ContenedorPortada = styled.div`

    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    height: 600px;
    margin-top: 50px;

    @media(max-width: 768px){
        div{
            z-index: -999;
            text-align: center;
            img{
                display: none;
            }
        }
    }

`
const PortadaTexto = styled.div`
    margin: auto;
    width: 400px;
    h2{
        font-size: 2.5rem;
        font-weight: 500;
        span{
            font-weight: bold;
        }
    }
    p{
        font-size: 1.7rem;
        color: #676666;
        margin-top: 10px;
    }
    button{
        width: 80px;
        height: 40px;
        margin-top: 40px;
        border: none;
        border-radius: 10px;
        color: white;
        background-color: #3b82f6;
        transition: .5s;
        cursor: pointer;
        :hover{
            background-color: #0e4fb8;
        }
    }
`
const PortadaImg = styled.div`
    margin: auto;
    img{
        width: 400px;
        height: 500px;
        object-fit: cover;
    }

`