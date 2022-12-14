import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 10%;
  background-color  :#111 ;
  color: lightgray;

  
`
const Wrapper = styled.div`
 padding: 20px;
 display: flex;
 justify-content   :space-between ;

 @media  (max-width: 320px) {
    padding: 10px;
  }

 
`

const List = styled.ul`
 padding: 0;
 margin: 0;
 list-style   :none ;
 display: flex;
`
const ListItem = styled.li`
 margin-right: 20px;  
 
 @media  (max-width: 991px) {
    font-size: 12px;
  }

  @media  (max-width: 320px) {
    font-size: 12px;
  }

  @media  (max-width: 260px) {
    font-size: 8px;
  }
`

const Copyright = styled.span`
  @media  (max-width: 320px) {
    font-size: 12px;
  }  
`

const Footer = () => {
  return (
    <Container>
       <Wrapper>
        <List>
        <ListItem>Guide</ListItem>
          <ListItem>Support</ListItem>
          <ListItem>API</ListItem>
          <ListItem>Community</ListItem>
        </List>
        <Copyright>Deepa H Ⓒ</Copyright>
       </Wrapper>
    </Container>
  )
}

export default Footer