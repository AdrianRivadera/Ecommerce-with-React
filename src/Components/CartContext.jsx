import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {

    const [cartList, setCartList] = useState([])

    const addToCart = (item, quantity) => {
        let found = cartList.find(ListadoProductos => ListadoProductos.idItem === item.id);
        if (found === undefined) {
            setCartList([
                ...cartList,
                {
                    idItem: item.id,
                    imgItem: item.img,
                    nameItem: item.nombre,
                    costItem: item.precio,
                    qtyItem: quantity
                }
            ]);
        } else {
            found.qtyItem += quantity;
        }
    }

    //borra toda la lista de items
    const removeList = () => {
        setCartList([]);
    }
    //borra item del carrito
    const deleteItem = (id) => {
        let result = cartList.filter(item => item.idItem != id);
        setCartList(result);
    }

    //calcula el total por item
    const calcTotalPerItem = (idItem) => {
        let index = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[index].costItem * cartList[index].qtyItem;
    }
    
    //calcula subtotal
    const calcSubTotal = () => {
        let totalPerItem = cartList.map(item => calcTotalPerItem(item.idItem));
        return totalPerItem.reduce((previosValue, currentValue) => previosValue +currentValue);
    }

    //calcular impuestos
    const calcTaxes = () => {
        return calcSubTotal() * 0.20
    }

    //calcular total
    const calcTotal = () => {
        return calcSubTotal()
    }

    //muestra cantidad de items en el icono
    const calcItemsQty = () => {
        let qtys = cartList.map(item => item.qtyItem);
        return qtys.reduce(((previusValue, currentValue) => previusValue + currentValue), 0);
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            deleteItem,
            calcTotalPerItem,
            calcItemsQty,
            calcTotal,
            calcTaxes,
            removeList,
            calcSubTotal
        }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;