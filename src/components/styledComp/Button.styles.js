import styled,{keyframes} from "styled-components";


const StyledButton = styled.button`
   background-color: ${(props) =>
   props.variant === 'outlined'?'white':'black'
   };
   color:${(props) =>
   props.variant === 'outlined'?'black':'white'
   };
   padding:20px 0px 20px 0px;
   width: 250px;
   font-size: 16px;
   border:3px solid;
   transition: 0.5s all ease-out;
   text-decoration: none;
   cursor: pointer;
   text-align: center;
   margin: 3px;
   border-radius: 5px;
   
   &:hover{
      background-color: ${(props) =>
   props.variant !== 'outlined'?'white':'black'
   };
   color:${(props) =>
   props.variant !== 'outlined'?'black':'white'
   };
   }
   
   `


// extending the styles of a button

const FancyButton = styled(StyledButton)`
 background-image: linear-gradient(to right,rgb(21, 177, 208) 20%,rgb(135, 213, 219));
 border: none;
`


// creating button styles with attributes like submit

const SubmitButton = styled(StyledButton).attrs((props)=>
({ 
  type:'submit',
})
)`
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
border: none;
&:hover{
    background-color: ${(props) =>
   props.variant !== 'outlined'?'white':'black'
   };
   box-shadow:0 8px 10px 0px #666;
   transform: translateY(5px);
    color:${(props) =>
   props.variant !== 'outlined'?'black':'white'
   };
}

`

//setting attributes based on prop passed
const SubmitButtonType = styled(StyledButton).attrs((props)=>
({ 
  type:props.btntype || 'button',
  onClick:props.onClick
})
)`
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
border: none;
background-color: ${(props)=>props.type ==='submit'?'#4CAF50':'#008CBA'};
&:hover{
    background-color: ${(props) =>
   props.variant !== 'outlined'?'white':'black'
   };
   box-shadow:0 8px 10px 0px #666;
   transform: translateY(5px);
    color:${(props) =>
   props.variant !== 'outlined'?'black':'white'
   };
}

`
//Animations
const rotate = keyframes`
   from{
      transform:rotate(0deg);
   }
   to{
      transform:rotate(360deg);
   }

`
const AnimLogo = styled.img`
animation: ${rotate} infinite 6s linear;
height: 40vmin;
pointer-events: none;
`

export default StyledButton;
export {FancyButton,SubmitButton,SubmitButtonType,AnimLogo};