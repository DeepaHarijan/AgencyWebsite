import React from 'react'
import styled from 'styled-components'
import PriceCard from './PriceCard'



const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap:wrap;

    
  
`

const Price = () => {
  return (
    <Container>
     <PriceCard price="2000" type="Basic"/>
     <PriceCard price="4000" type="Premium"/>
     <PriceCard price="6000" type="Advanced"/>
    </Container>
  )
}

export default Price