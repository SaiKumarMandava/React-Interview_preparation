import React from 'react';
import styled from'styled-components';
import StyledButton,{AnimLogo, FancyButton, SubmitButton, SubmitButtonType} from './Button.styles';
import Logo from '../../logo.svg';
export default function Stylecomponent() {
//    const StyledButton = styled.button`
//    background-color: black;
//    color:white;
//    padding:8px;
//    width:250px;
//    border: none;
//    transition: 0.5s all ease-out;
//    text-decoration: none;
//    cursor: pointer;
//    text-align: center;
//    display: inline-block;
   
//    `
   const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    flex-direction: column;
   `

  return (
    <Container>
        
        {/*style button based on prop*/}

        <StyledButton type='submit'>Styled Component</StyledButton>

        <StyledButton variant='outlined'>Styled Component Global</StyledButton>
         <FancyButton>Fancy Button</FancyButton>
       <SubmitButton>Submit Button</SubmitButton>
       <SubmitButtonType btntype="submit">Submit Button Type</SubmitButtonType>
       <SubmitButtonType onClick={()=>alert('Clicked')}>Submit Button Type 1</SubmitButtonType>
       <AnimLogo src={Logo}/>
    </Container>
  )
}
