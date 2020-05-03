import React from 'react';
import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
}

const StyledContent = styled.section`
  width: 100%;
  margin: auto;
  max-width: ${props => props.theme.maxWidth};
  padding: ${props => props.theme.emSizes[10]};
`;

function Content({children}: Props) {
  return <StyledContent>{children}</StyledContent>;
}

export default Content;
