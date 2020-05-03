import React from 'react';
import styled from 'styled-components';

import Footnote from '../Footnote';
import {disclaimer} from '../../content';

interface Props {}

const StyledDisclaimer = styled.div<Props>`
  border: 1px solid;
  max-width: 500px;
  margin: auto;
  padding: ${({theme: {emSizes}}) => `${emSizes[2]} ${emSizes[3]}`};
`;

function Disclaimer() {
  return (
    <StyledDisclaimer>
      <Footnote>Disclaimer: {disclaimer}</Footnote>
    </StyledDisclaimer>
  );
}

export default Disclaimer;
