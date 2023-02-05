import styled, { keyframes } from 'styled-components';

export const StyleComponent = styled.div`
    display: block;
    height: 100vh;
    background-color: ${({ theme }) => theme.bodyBackgroundColor};
`;
export const FlexComponentContainer = styled.div`
    display: flex;
    width: 80vw;
    align-items: center;
    justify-content: center;
    background: transparent;
    margin-top: 10vh;
    z-index: 1;

`;

export const ScreenBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    -webkit-clip-path: inset(0 0 0 0);
    clip-path: inset(0 0 0 0);    
`;

export const PolynomialOne = styled.div`
    z-index: -1;
    transform: rotate(45deg);
    position: absolute; 
    height: 520px;
    width: 520px;
    background: linear-gradient(270deg,${({ theme }) => theme.bodyPolynomialOne},#6A679E);    
    top: 24vh;
    right: 84vw;    
    border-radius: 0 72px 0 0;
`;
export const PolynomialTwo = styled.div`
    z-index: -1;
    position: absolute;
    height: 540px;
    width: 190px;
    background: linear-gradient(270deg, ${({ theme }) => theme.bodyPolynomialTwo}, #6A679E);
    top: 5vh;
    right: 0vw;    
    border-radius: 32px;
`;

export const PolynomialThree = styled.div`
    z-index: -1;
    position: absolute;
    height: 400px;
    width: 200px;
    background: linear-gradient(270deg,${({ theme }) => theme.bodyPolynomialThree},#6A679E);
    top: 75vh;
    right: 10vw;    
    border-radius: 60px;
`;

export const PolynomialFour = styled.div`
    z-index: -1;
    transform: rotate(12deg);
    position: absolute;
    height: 400px;
    width: 400px;
    background: linear-gradient(270deg,${({ theme }) => theme.bodyPolynomialFour},#6A679E);    
    top: 200px;
    right: 20vw;    
    border-radius: 60px;
    transition: background-color 1000ms linear;
`;

export const FlexContainerParent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const FormInput = styled.input`
    display: block;
    border-radius: 4px;
    padding: 10px;
    margin-top: 8px;
    font-size: 16px;
    font-weight: 300;

    &:focus {
        outline-style: none;
        border: 1px solid transparent;
    }
`;

//  #020e26
export const FlexItemForm = styled.div`
   margin: 10px;
   margin-top: 8vh;
   height: 65vh;
   width: 25vw;
   border: 2px solid black;
   background-color: transparent;
   border-radius: 6px;
   color: #020e26;
   padding: 16px;
   overflow: scroll;
   transition: 0.6s;
   transform: translate(0);
   font-weight: 400;

   &:hover {
    color:  #ffffff;
        & ${FormInput}: focus {
            border: 1px solid transparent;
        }
   }

   &:before {
    content: "";
    position: absolute;
    top: -75px;
    left: -45px;
    z-index: -1;
    background: linear-gradient(to right, ${({ theme }) => theme.formHoverBackground}, ${({ theme }) => theme.formHoverBackgroundTo});
    border-radius: 50%;
    width: 50%;
    height: 40%;
    transition: 0.6s;
   }

   &:hover::before {
        transform: scale(4.5);
    }

    & ${FormInput}: focus {
        border: 1px solid black;
    }
`;
export const FormHeader = styled.h4`
    font-family: "Babbel Milliard", sans-serif;
    font-size: 30px;
    line-height: 30px;
 `;

export const FlexItem = styled.div`
    margin: 10px;
    margin-top: 8vh;
    height: 65vh;
    width: 25vw;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
`;

export const FormComponent = styled.form`
    display: flex;  
    flex-direction: column;
`;

export const FormLabel = styled.label`
    display: flex;
    flex-flow: column;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 2em;
`;

export const FormButtonComponent = styled.button`
    justify-content: center;
    background: ${({ theme }) => theme.formButtonComponentColor};
    font-size: 20px;
    margin-top: 30px;
    padding: 16px 20px;
    border-radius: 26px;
    border: 1px solid #D4D3E8;
    text-transform: uppercase;
    font-weight: 700;
    display: flex;
    align-items: center;
    width: 100%;
    color: #4C489D;
    box-shadow: 0px 2px 2px #5C5696;
    cursor: pointer;
    transition: .2s;

    &:hover {
        border-color: #6A679E;
        outline: none;
        color: #FFF;
        background: #ff5252; ${({ theme }) => theme.formButtonHoverColor}
    }
`;

export const ErrorComponent = styled.div`
    font-size: 14px;
    color: red;
`;

export const Output = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.outputText};
    visibility: visible;
    opacity: 1;
    border-radius: 4px;
    transition: opacity 2s linear;
`;

const fadeIn = keyframes`
  from {
    transform: scale(.25);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
    from {
        transform: scale(1);
        opacity: 1;
    }

    to {
        transform: scale(.25);
        opacity: 0;
    }
`;

export const Fade = styled.div`
  display: inline-block;
  visibility: ${(props) => (props.out ? 'hidden' : 'visible')};
  animation: ${(props) => (props.out ? fadeOut : fadeIn)} 1s linear;
  transition: visibility 1s linear;
`;

export const ErrorLine = styled.p`
  font-size: 12px;
  font-weight: 200;
  color: red;
`;
