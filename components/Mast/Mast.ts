import styled from 'styled-components';

interface Props {
  level?: number;
}

const Mast = styled.h1<Props>`
  font-size: ${props => props.theme.fontSizes[2]};
  line-height: 1;
  font-weight: bold;
  padding-bottom: ${props => props.theme.emSizes[1]};
`;

export default Mast;
