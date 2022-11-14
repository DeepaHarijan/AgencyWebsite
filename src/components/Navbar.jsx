import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
height:50px;
position: relative;
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

    @media screen and (max-width: 768px){
      display: none;
    }
`

const MenuIcon = styled.h1`
  width:30%;
  height: 100vh;
  position: absolute;
  background-color: #fff;
  color: black;
  top: 0;
`

const OpenButton = styled.button`
  position: absolute;
  top: 0;
  right: 25px;
`

const Bars = styled.button`
display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    background-color: #fff;
    border: none;
    top: 10px;
    right:8px;
    padding: 5px;
    border-radius: 4px;
    /* transform: translate(-100%, 75%); */
    font-size: 1.1rem;
    cursor: pointer;
  }

  @media (max-width: 260px){
    padding: 3px;
    font-size: 0.9rem;
  }
`



const Navbar = () => {

  const [open, setOpen]= useState(false)
  const smallScreen  = window.screen.width <= 480 ? true : false;
  const [toggleMenu, setToggleMenu] = useState(false)
  const toggleNav = () =>{
      setToggleMenu(!toggleMenu)
  }
  return (
    <Container>
        <Wrapper>
            <Left><Logo>Agency</Logo>
           <div>
            {(toggleMenu && (
            <Menu>
                <MenuItem>Home</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Services</MenuItem>
                <MenuItem>Pricing</MenuItem>
                <MenuItem>Contact</MenuItem>
            </Menu>
            ))}
            </div>
            </Left>
           <Button>JOIN TODAY</Button>
           
           <Bars onClick={toggleNav}>Menu</Bars>
           {/* {smallScreen && open &&(
              <MenuIcon>
                
                <Menu open={open}></Menu>
              </MenuIcon>
            )} */}
        </Wrapper>
    </Container>
  )
}

export default Navbar