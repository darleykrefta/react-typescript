import React from 'react';

import styled from 'styled-components';

const StyledCard = styled.div`
  position: relative;
  background-color: #FFFFFF;
  width: 280px;
  min-height: 450px;
  margin: 10px 0 10px 0;
  padding: 10px;
  border-radius: 5px;
  -webkit-box-shadow: -1px 1px 3px 0px #696569;
  -moz-box-shadow: -1px 1px 3px 0px #696569;
  box-shadow: -1px 1px 3px 0px #696569;
`

const Card: React.FC<{}> = ({ children }) => {
  return (
    <StyledCard>
      {children}
    </StyledCard>
  )
}

export default Card;
