import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
padding: 20px;
/* width: 100px; */
margin-right: 50px;
display: flex;
align-items: center;
-webkit-box-shadow: 0px 0px 17px -11px rgba(0,0,0,0.58);
box-shadow: 0px 0px 17px -11px rgba(0,0,0,0.58);
background-color: #fff;
border-radius: 10px;
flex-direction: column;
@media  (max-width: 991px) {
    padding: 6px;
    margin: 6px;
  }

  @media (max-width: 320px) {
    padding: 3px;
    margin: 3px;
  }

`
const PriceContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`
const Price = styled.span`
font-weight: bold;
font-size: 50px;
@media  (max-width: 991px) {
    font-size: 20px;
  }

  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
  }
`
const Type = styled.button`
padding: 10px;
margin: 10px 0px;
border: 1.5px solid crimson;
color: crimson;
background-color: #fff;
border-radius: 20px;
@media  (max-width: 991px) {
    padding: 3px;
    font-size: 10px;
  }
`
const List = styled.ul`
list-style: none;

`
const ListItem = styled.li`
margin: 30px 0;
@media  (max-width: 991px) {
    font-size: 10px;
    margin: 10px 0;
  }

  @media  (max-width: 320px) {
    font-size: 8px;
    margin: 6px;
  }
`
const Button = styled.button`
border: none;
background-color: darkblue;
color: white;
font-size: 16px;
padding: 15px;
border-radius: 10px;
font-weight: bold;
@media  (max-width: 991px) {
    font-size: 8px;
    padding: 8px;
  }
`

const PriceCard = ({price, type}) => {
  return (
     
    <Container>
         <PriceContainer>
            ₹<Price>{price}</Price>/month
            <Type>{type} Plan</Type>
        </PriceContainer>   
            <List>
                <ListItem>200 Hand-crafted Templates</ListItem>
                <ListItem>Exclusive Support</ListItem>
                <ListItem>50+ PreBuilt Websites</ListItem>
                <ListItem>Premium Plugins</ListItem>{" "}
            </List>
            <Button>Join Now</Button>
         
    </Container>
  )
}

export default PriceCard