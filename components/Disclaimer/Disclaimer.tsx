import React from 'react';
import styled from 'styled-components';

import {useLocalStorage} from '../../utilities/local-storage';
import Footnote from '../Footnote';
import A from '../A';
import {disclaimer} from '../../content';

const StyledDisclaimer = styled.div`
  position: fixed;
  height: 100%;
  background: black;
  color: white;
  max-width: 500px;
  margin: auto;
  right: 0;
  top: 0;
  padding: ${({theme: {emSizes}}) => `${emSizes[6]}`};
`;

function Disclaimer() {
  const [{value, update}] = useLocalStorage('ShowDisclaimer');

  if (value !== null) {
    return null;
  }

  return (
    <StyledDisclaimer>
      <Footnote>Disclaimer: {disclaimer}</Footnote>
      <A
        onClick={() => {
          update(0);
        }}
      >
        I understand
      </A>
    </StyledDisclaimer>
  );
}

export default Disclaimer;
