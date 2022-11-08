import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
height:50px;
`

const Wrapper = styled.div`
padding:10px 20px;
display:flex;
justify-content:space-between;
align-items: center;

`

const Left = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Logo = styled.div`
    font-weight:bold;
    text-decoration: underline crimson;
`

const Menu = styled.ul`
display: flex;
list-style: none;

@media only screen and (max-width: 991px) {
    display: none;
  }
 
`
const handleChange = ()=>{
  const Li = styled.div`
    @media (max-width:991px){
    display: ${(props) => props.open && "none"};

position: absolute;
    top:100%; right: -100%;
    background: #fff;
    width: 30rem;
    height: calc(100vh - 9.5rem);
  } 
  `
}

const MenuItem = styled.li`
margin-right: 30px;
font-size: 20px;
font-weight: bold;
color: gray;


`

const Button = styled.button`
    border: 2px solid white;
    padding: 10px 15px;
    background-color: crimson;
    color:white;
    font-weight:bold;
    border-radius: 10px;
    cursor: pointer;
`

const MenuIcon = styled.h1`
  display: none;
  @media (max-width: 991px) {
    
    display: inline-block;
    font-size: 16px;
    padding: 10px;
    color: white;
    cursor: pointer;

  
  } 
 
`



const Navbar = () => {

  const [open, setOpen]= useState(false)
  return (
    <Container>
        <Wrapper>
            <Left><Logo>Agency</Logo>
            <Menu>
                <MenuItem>Home</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Services</MenuItem>
                <MenuItem>Pricing</MenuItem>
                <MenuItem>Contact</MenuItem>
            </Menu>
            </Left>
           <Button>JOIN TODAY</Button>
           <MenuIcon open={open} onClick={()=>setOpen(true)}>Menu</MenuIcon>
        </Wrapper>
    </Container>
  )
}

export default Navbar