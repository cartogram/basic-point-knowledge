import styled from 'styled-components';

const Footnote = styled.span`
  display: block;
  font-weight: normal;
  font-size: ${props => props.theme.fontSizes[0]};
  line-height: 1.6;
  font-family: ${props => props.theme.fontFamilies.sans.name};
`;

export default Footnote;
