import React from 'react'
import { useContext } from 'react'
import { CartContext } from './CartContext'
import { FiShoppingCart } from "react-icons/fi";
import { Badge } from '@mui/material';

const CartWidget = () => {
    const test = useContext(CartContext)
    return (
        <>
            <Badge badgeContent={test.calcItemsQty()} color="secondary">
                <FiShoppingCart />
            </Badge>
        </>
    )
}

export default CartWidget
