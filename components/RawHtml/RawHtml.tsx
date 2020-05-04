import React from 'react';
import styled from 'styled-components';

import {respondTo} from '../../styles/utils';

const StyledRawHtml = styled.article`
  text-align: right;

  p:first-child {
    text-indent: ${props => props.theme.emSizes[8]};
  }

  a {
    color: inherit;

    &:hover {
      text-decoration: none;
    }
  }

  h1,
  h2,
  h3,
  h4,
  ul,
  p {
    text-align: left;
    margin: auto 0 auto auto;
    padding-bottom: 1em;
    overflow-wrap: break-word;
    word-wrap: break-word;

    /* This is the dangerous one in WebKit, as it breaks things wherever */
    word-break: break-all;
    /* Instead use this non-standard one: */
    word-break: break-word;

    -ms-hyphens: auto;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;

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
