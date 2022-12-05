import React from 'react'
import styled from 'styled-components'
import ItemCount from './ItemCount';
import { useContext } from 'react';
import { CartContext } from './CartContext';



const ItemDetail = ({ item }) => {
    const { addToCart } = useContext(CartContext)

    const onAdd = (quantity) => {
        addToCart(item, quantity)
    }



    return (
        <>
            <ItemDeatil>
                <ImgContainer
                >
                    <img src={item.img} alt="Foto Modelo" />
                </ImgContainer>
                <TextContainer>
                    <h2>{item.nombre}</h2>
                    <p className='descripcion'>{item.descripcion}</p>
                    <h3>$ {item.precio}</h3>
                    <p className='cuotas'>En 6x ${(item.precio) / 6} sin interes</p>
                    <p className='medios'>Ver medios de pago</p>
                    <Envios>
                        <p className='envio'>Llega gratis hoy</p>
                    </Envios>


                    <p className='disponible'><span>{item.stock}</span> Disponibles</p>

                    <ItemCount
                        initial={0}
                        onAdd={onAdd}
                        stock={item.stock}
                    />
                </TextContainer>
            </ItemDeatil>

        </>
    )
}

export default ItemDetail


const ItemDeatil = styled.div`
    width: 60%;
    background-color: #f9f3f3;
    height: auto;
    margin: auto;
    margin-top: 50px;
    border-radius: 14px;
    margin-bottom: 100px;
    display: flex;
    @media(max-width: 768px){
        width: 90%;
        display: flex;
        flex-direction: column;
    }
    
`

const ImgContainer = styled.div`
    height: 800px; 
    display: flex;
    align-items: center;
    margin-left: 70px;
    @media(max-width: 768px){
        width: 90%;
        height: 450px;
        margin-bottom: 0;
        margin: auto;
        padding: 10px;
        justify-content: center;
    }
    img{
        height: 85%;
        border-radius: 14px;
        margin: auto;
        object-fit: cover;
        @media(max-width: 768px){
            height: 100%;
            width: 100%;
        }
    }
`

const TextContainer = styled.div`
    margin-left: 140px;
    margin: auto;
    @media(max-width: 768px){
        width: 90%; 
        margin-top: 40px;
    }
    h2{
        font-size: 2rem;
        font-weight: 500;
        margin-bottom: 15px;
    }
    .descripcion{
        text-transform: uppercase;
        font-weight: bold;
        margin-bottom: 100px;
        @media(max-width: 768px){
            margin-bottom: 40px;
        }
    }
    h3{
        font-size: 2.8rem;
        font-weight: 400;
        margin-bottom: 10px;
        @media(max-width: 768px){
            margin-bottom: 5px;
        }
    }
    .cuotas{
        color: #00a650;
        font-weight: 700;
        margin-bottom: 40px;
        @media(max-width: 768px){
            margin-bottom: 20px;
        }
    }
    .medios{
        font-weight: bold;
        color: #3483fa;
        margin-bottom: 40px;
        @media(max-width: 768px){
            margin-bottom: 20px;
        }
    }
    .envio{
        color: #00a650;
        font-weight: 700;
        font-size: 1.2rem;
    }
    .disponible{
        font-size: 1.2rem;
        margin-bottom: 60px;
        span{
            font-weight: bold;
        }
    }
`
const Envios = styled.div`
    display: flex;
    color: #00a650;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 40px;
    .envio{
        color: #00a650;
        font-weight: 700;
        font-size: 1.2rem;
    }
    .truck{
        margin-top: 6px;
        margin-right: 10px;
        font-size: 1.4rem;
    }
`