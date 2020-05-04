import {createGlobalStyle} from 'styled-components';

import theme from './theme';
import {reset, respondTo} from './utils';

const GlobalStyle = createGlobalStyle`
  html,
  body,
  body > div {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${theme.fontFamilies.serif.name};
    font-weight: ${theme.fontFamilies.serif.weight};
    line-height: 1.4;
    font-size: 5vw

    ${respondTo.xs`
      font-size: 4vw
    `}

    ${respondTo.sm`
      font-size: 3vw
    `}

    ${respondTo.md`
      font-size: 2vw;
    `}

    ${respondTo.lg`
      font-size: 1.3vw;
    `}
  }

  *,
  *:before,
  *:after {
    ${reset}
  }
`;

export default GlobalStyle;
