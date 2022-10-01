import React from 'react'
import styled from 'styled-components';

function Button({ children,handleClick}) {
  return (

    <ButtonStyled>
    <button
      onClick={handleClick}
    >
      {children}
    </button>
  </ButtonStyled>
 
  )
}


const ButtonStyled = styled.div`
  justify-content: center;
  display: flex;
  padding: 1px;

  button {
    margin-top: 1rem;
    border-radius: 1.5rem;
    margin-bottom: 1rem;
    background: var(--secondary);
    font-weight: 1500;
    font-size: 2rem;
    padding: 0.5rem 1rem;
    width: 50%;

    cursor: pointer;
    color: white;
  }
`;

export default Button