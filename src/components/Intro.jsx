import React from 'react'
import styled from 'styled-components'
import women from '../images/women.png'
import AnimatedShapes from './AnimatedShapes'

const Container = styled.div`
  height : calc(100vh - 50px);
  display: flex;
  padding: 20px;

  @media (max-width:991px){
    flex-direction: column; 
  }
  
`

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
   
  @media (max-width:991px){
    width: 100%;
    height: 100%; 
  }
  
`
const Title = styled.h1`
  font-size: 60px;
  width  : 60%;
  
  @media  (max-width: 991px) {
    width: 100%;
    font-size: 30px;
  }

  @media  (max-width: 260px) {
    width: 100%;
    font-size: 28px;
  }
`
const Desc = styled.p`
   width: 60%;
   font-size: 20px; 
   margin-top: 20px;

   @media (max-width: 991px) {
    width: 100%;
    font-size: 18px;
  }

  @media  (max-width: 260px) {
    width: 100%;
    font-size: 14px;
  }
`
const Info = styled.div`
  width: 60%;
  display: flex;
  justify-content  :space-between ;
  align-items: center;
  margin-top: 50px;

  @media  (max-width: 991px) {
     width: 100%;
    flex-direction: column;
    align-items: center;
  }
`

const Button = styled.button`
   padding: 15px;
   background-color: darkblue;
   color: white;
   border-radius: 10px;
   border: none;
   font-weight: bold;
   letter-spacing: 2px;
   cursor: pointer;
   @media  (max-width: 991px) {
    margin-bottom: 20px;
    padding: 10px;
    font-size: 12px;
    letter-spacing: 1px;
  }

  @media  (max-width: 260px) {
  padding: 8px;
  font-size: 10px;
  }
`
const Contact = styled.div`
    display: flex;
    flex-direction: column;
`

const Phone = styled.span`
    color:#f0667d;
    font-weight: bold;

    @media  (max-width: 260px) {
    font-size: 12px;
  }
`

const ContactText = styled.span`
    color:gray;
    margin-top: 5px;

    @media  (max-width: 260px) {
    font-size: 12px;
  }
`

const Right = styled.div`
  width: 40%;

  @media  (max-width: 991px) {
    display: none;
  }
`
const Image = styled.img`
    width: 100%;
`


const Intro = () => {
  return (
    <Container>
        <Left>
            <Title>Adventure in creative age</Title>
            <Desc>We believe that designing products and services in close partnership with our clients is the only way to have a real impact on their business.</Desc>
            <Info>
                <Button>START A PROJECT</Button>
                 <Contact>
                    <Phone>
                      Call us 5234521365
                    </Phone>
                    <ContactText>
                       For any question or concern. 
                    </ContactText>
                 </Contact>
            </Info>
        </Left>
        <Right><Image src={women}></Image></Right>
        <AnimatedShapes></AnimatedShapes>
    </Container>
  )
}

export default Intro