import React from 'react';
import styled from 'styled-components';

import {respondTo} from '../../styles/utils';
import A from '../A';
import {title} from '../../content';

import Svg from './Svg';

interface Props {
  title: string;
}

const VisuallyHidden = styled.span<Partial<Props>>`
  display: none;
`;

const StyledLogo = styled.div<Partial<Props>>`
  width: 100%;
  text-align: center;
  padding: ${props => props.theme.emSizes[3]};

  svg {
    max-width: 100px;
  }

  ${respondTo.sm`
    svg {
      max-width: 140px;
    }
  `}

  ${respondTo.md`
    svg {
      max-width: 100%;
    }
  `}
`;

export default function Logo() {
  return (
    <StyledLogo>
      <A href="/">
        <Svg />
        <VisuallyHidden>{title}</VisuallyHidden>
      </A>
    </StyledLogo>
  );
}
