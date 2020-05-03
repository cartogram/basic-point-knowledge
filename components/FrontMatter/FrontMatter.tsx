import React from 'react';
import styled from 'styled-components';

import {respondTo} from '../../styles/utils';
import Mast from '../Mast';

interface Props {
  title: string;
}

const StyledFrontMatter = styled.div<Partial<Props>>`
  text-align: center;
  overflow: hidden;

  ${respondTo.md`
    max-width: 50%;
  `}

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    display: block;
    width: 200vw;
    height: 200vw;
    background: #00ffc412;
    z-index: -1;
    transform: rotate(-45deg) translate(0, -95%);
  }
`;

export default function FrontMatter({title}: Props) {
  return (
    <StyledFrontMatter>
      <Mast>{title}</Mast>
    </StyledFrontMatter>
  );
}
