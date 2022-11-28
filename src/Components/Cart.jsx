import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import FormatNumber from '../utils/FormatNumber';
import { CartContext } from './CartContext'
import { Button } from '@mui/material';



const Cart = (item) => {

    const { cartList } = useContext(CartContext)
    console.log(cartList)

    const { deleteItem } = useContext(CartContext)
    const { removeList } = useContext(CartContext)
    const { calcTotalPerItem } = useContext(CartContext)
    const { calcSubTotal } = useContext(CartContext)
    const { calcTaxes } = useContext(CartContext)
    const { calcTotal } = useContext(CartContext)

    return (
        <CartContainer>
            <TitleCart>Tu Carrito</TitleCart>
            <Top>
                <Link to='/' className='link'><Button variant="outlined" className='continuarComprando'>Continuar comprando</Button></Link>

                {
                    (cartList.length > 0)
                        ? <Button type="filled" onClick={removeList}>Borrar todos los productos</Button>
                        : <TopText>Tu carrito esta vacio</TopText>

                }
            </Top>
            <ContentCart>
                <InfoCart>
                    {
                        cartList.length > 0 &&
                        cartList.map(item =>
                            <Product key={item.idItem}>
                                <ProductDetail>
                                    <ImageCart src={item.imgItem} />
                                    <Details>
                                        <span>
                                            <p>{item.nameItem}</p>
                                        </span>
                                        <Button type="filled" onClick={() => deleteItem(item.idItem)}>Eliminar</Button>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <ProductAmount>{item.qtyItem} item(s)</ProductAmount>
                                        <ProductAmount>/</ProductAmount>
                                        <ProductAmount>{item.costItem} item(s)</ProductAmount>
                                    </ProductAmountContainer>
                                    <TotalProductPrice>$ {calcTotalPerItem(item.idItem)}</TotalProductPrice>
                                </PriceDetail>
                            </Product>

                        )
                    }
                </InfoCart>
                {
                    cartList.length > 0 &&
                        <Sumarry>
                            <SumarryTitle>Tu orden</SumarryTitle>
                            <SumarryItem>
                                <SumarryItemText>Subtotal</SumarryItemText>
                                <SumarryItemText><FormatNumber number={calcSubTotal()} /></SumarryItemText>
                            </SumarryItem>
                            <SumarryItem>
                                <SumarryItemText>Impuestos</SumarryItemText>
                                <SumarryItemText><FormatNumber number={calcTaxes()} /></SumarryItemText>
                            </SumarryItem>
                            <SumarryItem>
                                <SumarryItemText>Descuentos</SumarryItemText>
                                <SumarryItemText><FormatNumber number={-calcTaxes()} /></SumarryItemText>
                            </SumarryItem>
                            <SumarryItemTotal type="total">
                                <SumarryItemTextTotal>Total</SumarryItemTextTotal>
                                <SumarryItemTextTotal><FormatNumber number={calcTotal()} /></SumarryItemTextTotal>
                            </SumarryItemTotal>
                            <Button className='ButtonEnd'>Finalizar compra</Button>
                        </Sumarry>
                }
            </ContentCart>
        </CartContainer>
    )
}

export default Cart

const CartContainer = styled.div`
    width: 70%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media(max-width: 768px){
        width: 90%;
    }
`
const TitleCart = styled.h2`
    font-size: 1.8rem;
    font-weight: 400;
    text-transform: uppercase;
    @media(max-width: 768px){
        font-size: 1.4rem;
    }
`
const Top = styled.div`
    width: 100%;
    margin-top: 40px;
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    
    .link{
        text-decoration: none   ;
    }
    .button{
        color: black;
        border-color: black;
    }
`

const TopText = styled.h3`
    text-transform: uppercase;
`

const ContentCart = styled.div`
    width: 100%;
`
const InfoCart = styled.div`
    width: 100%;
`
const Product = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
const ProductDetail = styled.div`
    display: flex;
    margin-bottom: 20px;
`
const ImageCart = styled.img`
    border: solid 1px gray;
    height: 100px;
    width: 70px;
    object-fit: cover;
    margin-right: 15px;
    @media(max-width: 768px){
        margin-right: 10px;
    }
`
const Details = styled.div`
    span{
        p{
            font-size: 1.4rem;
            font-weight: bold;
            @media(max-width: 768px){
                font-size: 1rem;
                margin-right: 5px;
            }
        }
    }
`
const PriceDetail = styled.div`
    display: flex;
    width: 400px;
    justify-content: space-between;
`
const ProductAmountContainer = styled.div`
    display: flex;
`
const ProductAmount = styled.p`
    margin-right: 8px;
`
const TotalProductPrice = styled.h3`

`

const Sumarry = styled.div`
    border: solid 1px black;
    padding: 16px;
    margin-bottom: 40px;
    .ButtonEnd{
        margin-top: 20px;
        background-color: #ebe8e8;
        width: 200px;
        height: 40px;
    }
`
const SumarryTitle = styled.h2`
    font-size: 2rem;
    margin-bottom: 20px;
`
const SumarryItem = styled.div`
    display: flex;
`
const SumarryItemText = styled.p`
    font-size: 1.2rem;
    margin-bottom: 6px;
    margin-right: 20px;
`
const SumarryItemTotal = styled.div`
    display: flex;
    margin-top: 10px;
    width: 20%;
    border-top: solid 1px black;
`
const SumarryItemTextTotal = styled.p`
    font-size: 1.4rem;
    margin-top: 10px;
    //text-transform: uppercase;
    margin-right: 20px;
    font-weight: bold;
`