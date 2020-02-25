import React from 'react';

import styled from 'styled-components';
import Box from '../Box';

const StyledImageCard = styled.img`
  background-color: #FFFFFF;
  width: 120px;
`

interface IProps {
  src: string,
  alt: string
}

const ImageCard: React.FC<IProps> = ({ src, alt }) => {
  return (
    <Box flex={1} justifyContent="center">
      <StyledImageCard src={src} alt={alt} />
    </Box>
  )
}

export default ImageCard;