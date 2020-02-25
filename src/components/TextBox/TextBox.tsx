import React from 'react';

import { DefaultEditor } from 'react-simple-wysiwyg';
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';

const StyledDefaultEditor = styled(DefaultEditor) <IParagraph>`
  color: ${prop => prop.color};
`

const StyledParagraph = styled.span<IParagraph>`
  color: ${prop => prop.color};
  font-size: ${prop => prop.fontSize};
  font-weight: ${prop => prop.fontWeight};
`

interface IParagraph {
  color: string,
  fontSize?: string,
  fontWeight?: string,
  name: string
}

interface IProps {
  value: string,
  name: string,
  color: string,
  isEditable?: boolean,
  fontSize?: string,
  fontWeight?: string,
  handleChange?: (field: any, value: any) => void
}

const TextBox: React.FC<IProps> = ({ value, name, color, fontSize, fontWeight, isEditable, handleChange }) => {

  const handleChangeInput = (field) => {
    handleChange(name, field.value);
  }

  return (
    <>
      {isEditable
        ?
        <StyledDefaultEditor color={color} value={value} name={name} onChange={(e) => handleChangeInput(e.target)} />
        :
        <StyledParagraph color={color} fontSize={fontSize} name={name} fontWeight={fontWeight}>{ReactHtmlParser(value)}</StyledParagraph>
      }
    </>
  )
}

export default TextBox;