import React from 'react';
import styled from 'styled-components';

import {respondTo} from '../../styles/utils';

interface Props {
  children?: React.ReactNode;
}

const StyledContent = styled.section`
  width: 100%;
  margin: auto;
  max-width: ${props => props.theme.maxWidth};
  padding: ${props => props.theme.emSizes[5]};

  ${respondTo.sm`
    padding: ${(props: any) => props.theme.emSizes[10]};
  `}
`;

function Content({children}: Props) {
  return <StyledContent>{children}</StyledContent>;
}

export default Content;
