import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import BurgerButton from './BurgerButton'
import ListadoProductos from '../utils/ListadoProductos';
import customFetch from '../utils/customFetch';
import ItemListContainer from './ItemListContainer'
import { Routes, Route, Link, useParams } from 'react-router-dom';




const Navbar = ({ }) => {

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }

    const [datos, setDatos] = useState(ListadoProductos)
    const { idCategory } = useParams()



    useEffect(() => {
        if (idCategory == undefined) {
            customFetch(2000, ListadoProductos)
                .then(result => setDatos(result))
                .catch(err => console.log(err))
        } else {
            customFetch(2000, ListadoProductos.filter(item => item.categoryId == idCategory))
                .then(result => setDatos(result))
                .catch(err => console.log(err))
        }
    }, [idCategory])



    return (

        <NavbarContainer>
            <Link to='/' className='title'><h2>Tienda <span>Online</span></h2></Link>
            <ItemListContainer
                clicked={clicked}
                setClicked={setClicked}

            />
            <div className='burger'>
                <BurgerButton
                    clicked={clicked}
                    handleClick={handleClick}
                />
            </div>
            <BgDiv
                className={`initial ${clicked ? 'active' : ''}`}
            >
            </BgDiv>
        </NavbarContainer>

    )
}

export default Navbar


const NavbarContainer = styled.nav`
    .title{
        text-decoration: none;

    }
    h2{font-weight: 500;

    text-transform: uppercase;
    margin-left: 10px;
    color: #fff;
        span{font-weight: bold;}
    }
    padding: .4rem;
    background-color: #3b82f6;
    opacity: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;  
    height: 70px;

    .burger{
        @media(min-width: 768px){
            display: none;
        }
    }
`

const BgDiv = styled.div`
    position: absolute;
    background-color: #2a6cd6;
    top: -700px;
    left: -1000px;
    width: 100%;
    height: 1vh;
    z-index: -99;
    transition: all .6s ease;

    &.active{
        border-radius: 0 0 80% 0 ;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
       // z-index: -1;
    }
    @media(min-width: 768px){
        display: none;
    }

`