import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import customFetch from '../utils/customFetch';
import ListadoProductos from '../utils/ListadoProductos';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        customFetch(2000, ListadoProductos.find(item => item.id == idItem))
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);

  return (
    <ItemDetail item={dato} />
  )
}

export default ItemDetailContainer