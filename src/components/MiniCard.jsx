import React from 'react'
import styled from 'styled-components'
import Search from "../images/search.png"

const Container = styled.div`
width: 200px;
padding: 20px;
margin: 10px;
display: flex;
align-items: center;
/* justify-content: center; */
flex-direction: column;
-webkit-box-shadow: 0px 0px 17px -11px rgba(0,0,0,0.58);
box-shadow: 0px 0px 17px -11px rgba(0,0,0,0.58);

@media only screen and (max-width: 480px) {
    width: 20px;
    height: 40px;
    
  }
`
const Image = styled.img`
    width: 20px;
    @media only screen and (max-width: 480px) {
    width: 10px;
  }
`
const Text = styled.span`
  margin-top: 10px; 
  text-align :center ;

  @media only screen and (max-width: 480px) {
    font-size: 8px;
  }
`

const MiniCard = () => {
  return (
    
    <Container>
        <Image src={Search}/>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. </Text>

    </Container>
  )
}

export default MiniCard