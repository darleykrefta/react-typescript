import React from 'react';

import styled from 'styled-components';

const StyledBox = styled.div<IProps>`
  display: flex;
  margin: 0 0 0 5px;
  ${props => `flex: ${props.flex};`}
  ${props => `flex-direction: ${props.flexDirection};`}
  ${props => `justify-content: ${props.justifyContent};`}
  ${props => `align-items: ${props.alignItems};`}
`;

interface IProps {
  flex?: number,
  flexDirection?: string,
  justifyContent?: string,
  alignItems?: string
}

const Box: React.FC<IProps> = ({ flex, flexDirection, justifyContent, alignItems, children }) => {
  return (
    <StyledBox flex={flex} flexDirection={flexDirection} justifyContent={justifyContent} alignItems={alignItems}>{children}</StyledBox>
  )
}

export default Box;