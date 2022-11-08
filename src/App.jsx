import React from 'react'
import styled, { css } from 'styled-components'
import Contact from './components/Contact'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Price from './components/Price'
import Service from './components/Service'

const App = () => {
  return (
    <>
    <Container>
        <Navbar></Navbar>
        <Intro/>
        <IntoShape></IntoShape>
    </Container>
    
    <Container>
    <Feature></Feature>
    <FeatureShape/>
    </Container>

    <Container>
    <Service/>
    <ServiceShape/>
    </Container>

    <Container>
    <Price/>
    <PriceShape/>
    </Container>

    <Container>
        <Contact></Contact>
        <Footer/>
    </Container>
    
    </>
  )
}

const Container = styled.div`
height: 100vh;
overflow: hidden;
position: relative;

`
const Shape = css`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`

const IntoShape = styled.div`
    clip-path: polygon(67% 0% , 100% 0%, 100% 100%, 55% 80%);
    background-color: crimson;
    ${Shape}
`

const FeatureShape = styled.div`
    clip-path: polygon(0 0, 55% 0%, 33% 100%, 0 100%);
    background-color: #ffe1e6;
    ${Shape}
`

const ServiceShape = styled.div`
    clip-path: polygon(5% 0, 33% 0%, 33% 100%, 0 100%);
    background-color: #f88497;
    ${Shape}
`

const PriceShape = styled.div`
    clip-path: polygon(33% 0, 100% 0%, 100% 100%, 67% 100%);
    background-color: crimson;
    ${Shape}
`


export default App