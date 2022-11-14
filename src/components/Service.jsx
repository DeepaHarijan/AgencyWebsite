import React, { useState } from 'react'
import styled from 'styled-components'
import How from '../images/how1.png'
import MiniCard from './MiniCard'
import Play from '../images/play.png'


const Container = styled.div`
    display: flex;
    @media  (max-width: 991px) {
    flex-direction: column;
  }
    /* height: 100%; */
`

const Left = styled.div`
    width: 50%;
    position: relative;
    @media  (max-width: 991px) {
    display: none;
  }
`

const Image = styled.img`
    height: 100%;
    margin-top: 20px;
    display: ${(props) => props.open && "none"}; 
`

const Video = styled.video`
     display: ${(props) => !props.open && "none"};
     height: 300px;
     position: absolute;
     top: 0;
     margin: auto;
     bottom: 0px;
     width: 100%;
  

     @media (max-width: 991px) {
    width: 100%;
  }

  @media (max-width: 320px) {
    width: 100%;
  }
`

const Right = styled.div`
    width: 50%;

    @media (max-width: 991px) {
    width: 100%;
    
  }

`
 
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction  :column ;
`
const Title = styled.h1`
  @media  (max-width: 260px) {

    font-size: 26px;
    margin-top: -10px;
  }  
`
const Desc = styled.p`
   font-size: 20px;
   margin-top: 20px;
   color  :#555 ;

   @media (max-width: 991px) {
    font-size: 12px;
  }
`

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
    @media  (max-width: 991px) {
    margin-top: 10px;
  }

`
const Button = styled.button`
    width: 180px;
    border: none;
    border-radius: 10px;
    background-color: darkblue;
    color: white;
    font-size: 20px;
    padding: 15px;
    margin-top: 50px;
    cursor: pointer;
    display: flex;
    margin-left: 10px;
    align-items: center;

    /* @media only screen and (max-width: 480px) {
    display: none;
  } */

  @media  (max-width:320px) {
    font-size: 16px;
    padding: 10px;
    width: 140px;
  }

  @media  (max-width: 260px) {
    padding: 6px;
    font-size: 14px;
  }
`

const Icon = styled.img`
    width: 20px;
    margin-right: 10px;
`

const Modal = styled.div`
width: 100vw;
height: 100vh;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0,0,0,0.5);
`
const CloseButton = styled.button`
  position: absolute;
  background-color: #fff;
  padding: 5px;
  border: none;
  border-radius: 5px;
  right: 5px;
  top: 30%;
`
const Service = () => {

    const[open, setOpen] = useState(false);
    const smallScreen  = window.screen.width <= 480 ? true : false;

  return (
    <Container>
       <Left>
        <Image open={open} src={How}></Image>
        <Video open={open} autoPlay loop controls src='https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761'/>
       </Left>
       <Right>
        <Wrapper>
           <Title>Simple process to start</Title>
           <Desc>We provide digital experience services to startups and small businesses to looking
            for a partner of their digital media, design & development, lead generation and communications
            requirents. We work with you, not for you. Although we have a great resources.
           </Desc>

           <CardContainer>
            <MiniCard/>
            <MiniCard/>
            <MiniCard/>
           </CardContainer>
           <Button onClick={()=> setOpen(true)}><Icon src={Play}/>How it works</Button>
        </Wrapper>
       </Right>
       {smallScreen && open &&(
        <Modal>
          <Video
           open={open} 
           autoPlay 
           loop 
           controls 
           src='https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761'/>
           <CloseButton onClick={()=> setOpen(false)}>close</CloseButton>
        </Modal>
       )}
    </Container>
  )
}

export default Service