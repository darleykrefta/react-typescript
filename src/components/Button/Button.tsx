import React from 'react';

import styled from 'styled-components';

const StyledButton = styled.button<IStyledButton>`
  ${props => props.rounded ? 'min-width: 30px; min-height: 30px;' : 'min-width: 100px;'};
  color: #21409a;
  background-color: white;
  text-align: center;
  border: 1px solid #21409a;
  padding: 0px;
  border-radius:  ${props => props.rounded ? '100%' : '5px'};
 
  -webkit-transition-duration: 0.4s;
  -moz-transition-duration: 0.4s;
  -o-transition-duration: 0.4s;
  transition-duration: 0.4s;

  :hover:enabled {
    background-color: #21409a;
    color: white;
  }
  
  :disabled {
    background-color: #DFDEDE;
    color: #7B7E7D;
    border: none;
    cursor: not-allowed;
  }
  
  :focus {
    outline: none;
  }
`
interface IStyledButton {
  rounded?: boolean
}
interface IProps {
  text?: string,
  icon?: React.ReactNode,
  handleClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  disabled?: boolean,
  rounded?: boolean
}

const Button: React.FC<IProps> = ({ text, handleClick, disabled, icon, rounded }) => {

  return (
    <StyledButton disabled={disabled} onClick={handleClick} rounded={rounded}>{text}{icon}</StyledButton>
  )
}

export default Button;