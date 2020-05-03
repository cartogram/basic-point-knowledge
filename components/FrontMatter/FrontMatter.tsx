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
`;

export default function FrontMatter({title}: Props) {
  return (
    <StyledFrontMatter>
      <Mast>{title}</Mast>
    </StyledFrontMatter>
  );
}
