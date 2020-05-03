import styled from 'styled-components';

const Text = styled.p`
  font-weight: normal;
  display: block;
  padding-bottom: ${props => props.theme.emSizes[1]};
`;

export default Text;
