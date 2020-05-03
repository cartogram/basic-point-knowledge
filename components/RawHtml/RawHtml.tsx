import React from 'react';
import styled from 'styled-components';

import {respondTo} from '../../styles/utils';

const StyledRawHtml = styled.article`
  text-align: right;

  h1,
  h2,
  h3,
  h4,
  ul,
  p {
    text-align: left;
    margin: auto 0 auto auto;
    padding-bottom: 1em;

    ${respondTo.md`
      max-width: 50%;
    `}
  }
`;

interface Props {
  children: React.ReactNode;
}

function RawHtml({children}: Props) {
  return <StyledRawHtml>{children}</StyledRawHtml>;
}

export default RawHtml;
