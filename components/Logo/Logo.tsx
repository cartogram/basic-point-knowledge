import React from 'react';
import styled from 'styled-components';

import Heading from '../Heading';
import A from '../A';
import {title} from '../../content';

interface Props {
  title: string;
}

const StyledLogo = styled.div<Partial<Props>>`
  width: 100%;
  text-align: center;
  padding: ${props => props.theme.emSizes[3]};
  font-size: ${props => props.theme.fontSizes[0]};
  font-family: ${props => props.theme.fontFamilies.mono.name};
  font-weight: ${props => props.theme.fontFamilies.sans.weight};
`;

export default function Logo() {
  return (
    <StyledLogo>
      <Heading>
        <A href="/">{title}</A>
      </Heading>
    </StyledLogo>
  );
}
