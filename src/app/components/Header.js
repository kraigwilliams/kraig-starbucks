import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import styled from 'styled-components'
import FindAStore from '../../FindAStore'
import {Example} from '../../Example'


function Header() {
    return (
        <HeaderContainer>
        <HeaderLeft>
            
            <Link>
            <img src='https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png' alt='' />
            </Link>
            
            <Link to ='/menu' className='header__link'>Menu</Link>
            <Link to ='/menu' className='header__link'>Rewards</Link>  
            <Link to ='/menu' className='header__link'>Gift Cards </Link> 
            </HeaderLeft>
            <div className ='header__right'>
           <Example/>
           <FindAStore/>
            {/* User Here */}
            </div>
            </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`

`
const HeaderLeft = styled.div`
display:flex;
gap:20px;

img{
    height:50px;
    
}

a:hover{
color:#008248;
transition: all 0.2s;
}

a{
    color:black;
    font-weight:800;
    letter-spacing:1.4px;
    opacity:0.87;
    text-transform:uppercase;
    font-size:14px;
}

`;