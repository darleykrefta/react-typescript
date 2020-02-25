import React from 'react';

import styled from 'styled-components';

const StyledContainer = styled.div`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  max-width: 310px;
  justify-content: space-around;
  
  @media (min-width: 576px){
    max-width: 500px;
  }
    
  @media (min-width: 768px){
    max-width: 620px;
  }
    
  @media (min-width: 992px){
    max-width: 930px;
  }
    
  @media (min-width: 1400px){
    max-width: 1200px;
  }
`;

const Container: React.FC<{}> = ({ children }) => {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}

export default Container;