import React from 'react'
import styled from 'styled-components'
import App from '../images/app.png'
import AnimatedShapes from './AnimatedShapes'

 const Container = styled.div`
   display: flex; 

   @media  (max-width: 991px) {
    flex-direction: column;
    padding: 50px 30px;
  }
 `

const Left = styled.div`
width: 50%;
@media  (max-width: 991px) {
    display: none;
  } 
`
const Image = styled.img`
  width  :70% ;
`

const Right = styled.div`
width: 50%;
display: flex; 
flex-direction: column;
justify-content: center;

@media  (max-width: 991px) {
    width: 100%;
  }
`

const Title = styled.span`
 font-size: 70px;
 @media  (max-width: 991px) {
    font-size: 55px;
  }

  @media  (max-width:320px) {
    font-size: 45px;
  }

  @media  (max-width: 260px) {
    font-size: 30px;
  }
    
`
const SubTitle = styled.span`
 font-size: 24px;
 font-style   :italic ;
 color: #333;
 margin-top: 30px;
 @media  (max-width: 991px) {
    font-size: 20px;
  }

  @media  (max-width:320px) {
    font-size: 18px;
  }

  @media  (max-width: 260px) {
    font-size: 16px;
  }
`
const Desc = styled.p`
 font-size: 20px;
 color   :#777 ;
 margin-top: 30px;

 @media  (max-width: 991px) {
    font-size: 16px;
  }

  @media  (max-width:320px) {
    font-size: 14px;
  }

  @media  (max-width: 260px) {
    font-size: 13px;
  }
`
const Button = styled.button`
 width: 150px;
 border   :none ;
 padding: 15px 20px;
background-color:darkblue;
color:white;
font-size: 20px;
border-radius: 20px;
margin-top:  20px;
cursor: pointer;
@media (max-width: 991px) {
    font-size: 16px;
    padding: 12px 18px;
    
  }

  @media  (max-width:320px) {
    font-size: 14px;
    padding: 10px 14px;
  }

  @media  (max-width: 260px) {
    font-size: 12px;
    padding: 8px;
  }
`

const Feature = () => {
  return (
    
    <Container>
       <Left>
        <Image src={App}></Image>
       </Left>
       <Right>
        <Title>
            <b>good</b> design <br></br> <b>good</b> business
        </Title>
        <SubTitle>We know that good design means good business.</SubTitle>
        <Desc>We help our clients succeed by creating brand 
            identities, digital experiences, and print materials
            that communicate clearly, achieve marketing goals, and look fantastic.
        </Desc>
        <Desc>we care your business and gaurantee you to achieve marketing goals.</Desc>
        <Button>Learn More</Button>
       </Right>
       <AnimatedShapes></AnimatedShapes>
    </Container>
  )
}

export default Feature