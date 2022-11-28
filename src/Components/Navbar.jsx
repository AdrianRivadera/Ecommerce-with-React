import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import BurgerButton from './BurgerButton'
import ItemListContainer from './ItemListContainer'
import { Link } from 'react-router-dom';

const Navbar = ({ }) => {

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }

    return (

        <NavbarContainer>
            <Link to='/' className='title'><h2>Tienda <span>Online</span></h2></Link>
            <ItemListContainer
                clicked={clicked}
                setClicked={setClicked}
                handleClick={handleClick}
                
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
    margin-bottom: 60px;
    .title{
        text-decoration: none;
        z-index: 99;
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
        z-index: 99;
    }
    .burger{
        @media(min-width: 768px){
            display: none;
        }
    }
`

const BgDiv = styled.div`
    position: absolute;
    z-index: 10;
    background-color: #2a6cd6;
    top: -700px;
    left: -1000px;
    width: 100%;
    height: 1vh;
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