import React from 'react'
import styled from 'styled-components'
import Map from '../images/map.png'
import Phone from '../images/phone.png'
import Send from '../images/send.png'
const Container = styled.div`
  background  : url("https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-outline.png");
  height: 90%;
`

const Wrapper = styled.div`
 height: 100%;
 padding: 20px;
 display: flex;
 align-items: center;
 justify-content: center;

 @media  (max-width: 991px) {
    flex-direction: column;
  }

  
`

const FormContainer = styled.div`
 width: 50%; 
 @media  (max-width: 991px) {
    width: 100%;
  }

  @media  (max-width:320px) {
    width: 100%;
  }
`
const  Title = styled.h1`
     margin: 50px;
  margin-top: 0;
  @media  (max-width: 991px) {
    font-size: 20px;
    margin: 20px;
  }

  @media  (max-width:320px) {
    font-size: 14px;
    /* margin-top: 100px; */
  }
`
const Form = styled.form`
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media  (max-width: 991px) {
    flex-direction: column;
  }
`

const LeftForm = styled.div`
   height: 100%;
   display: flex;
   flex-direction :column ;
   justify-content: space-between;
   margin-right: 20px;

   @media  (max-width: 991px) {
    margin-right: 0;
    margin-top: 35px;
  }
  @media  (max-width: 320px) {
    margin-top: 20px;
  }
`
const RightForm = styled.div`
  height: 100%;
   display: flex;
   flex-direction :column ;
   justify-content: space-between;  
`
const Input = styled.input`
    width: 200px;
    padding: 20px;
    
    @media  (max-width: 991px) {
    width: 300px;
    padding: 10px;
    margin: 10px;
  }

  @media  (max-width: 320px) {
    width: 200px;
    padding: 2px;
    margin: 6px;
  }
`
const TextArea = styled.textarea`
    width: 200px;
    height: 60%;
    padding: 20px;

    @media  (max-width: 991px) {
    width: 300px;
    padding: 10px;
    margin: 10px;
  }

  @media  (max-width: 320px) {
    width: 200px;
    padding: 2px;
    margin: 6px;
  }
`

const Button = styled.button`
  border: none;
  padding: 15px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer; 
  
  @media  (max-width: 991px) {
    font-size: 12px;
    padding: 10px;
    margin: 10px;
  }
`

const AddressContainer = styled.div`
 width:50% ;
 display: flex;
 flex-direction: column;
 align-items: center;

 @media  (max-width: 991px) {
    margin-top: 60px;
  }

  @media  (max-width: 320px) {
   margin-top: 10px;
  }

  @media  (max-width: 260px) {
    width: 100%;
    
  }
`

const AddressItem = styled.div`
 display: flex;
 align-items: center; 
 margin-bottom: 50px; 
 
 @media  (max-width: 991px) {
    margin-bottom: 20px;
  }

  @media  (max-width: 320px) {
    margin-bottom: 10px;
  }

  @media  (max-width: 260px) {
    margin-bottom: 0;
    display: inline-block;
    margin: auto;
  
  }
`
const Icon = styled.img`
   width:20px;
    margin-right: 20px;

    @media  (max-width: 320px) {
    width: 15px;
  }

  @media  (max-width: 260px) {
    width: 10px;
  }
`
const Text = styled.span`
    font-size: 20px;
    margin-right: 50px;

    @media  (max-width: 991px) {
    font-size: 14px;
    
  }

  @media  (max-width: 320px) {
    font-size: 10px;
    width: 70px;
  }

  @media  (max-width: 260px) {
    font-size: 6px;
  }
`

const Contact = () => {
  return (
    <Container>
       <Wrapper>
           <FormContainer>
           <Title>
            Questions? <br /> Let's Get In Touch
          </Title>
            <Form>
            <LeftForm>
                <Input placeholder='Your Name'/>
                <Input placeholder='Your Email'/>
                <Input placeholder='Subject'/>
            </LeftForm>
            <RightForm>
                <TextArea placeholder='Your Message'></TextArea>
                <Button>Send</Button>
            </RightForm>
            </Form>
           </FormContainer>
           <AddressContainer>
           <AddressItem>
            <Icon src={Map} />
            <Text>123 Park Avenue St., New York, USA</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Phone} />
            <Text>+1 631 1234 5678</Text>
            <Text>+1 326 1234 5678</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Send} />
            <Text>contact@lama.dev</Text>
            <Text>sales@lama.dev</Text>
          </AddressItem>
        </AddressContainer>
       </Wrapper>
    </Container>
  )
}

export default Contact