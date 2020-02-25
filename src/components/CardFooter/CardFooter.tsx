import React from 'react';

import styled from 'styled-components';

const StyledCardFooter = styled.div`
  position: absolute;
  width: 95%;
  height: 25px;
  bottom: 10px;
`
const CardFooter: React.FC<{}> = ({ children }) => {
  return (
    <StyledCardFooter>
      {children}
    </StyledCardFooter>
  )
}

export default CardFooter;