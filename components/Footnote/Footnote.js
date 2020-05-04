import styled from 'styled-components';

const Footnote = styled.span`
  display: block;
  font-weight: normal;
  font-size: 15px;
  line-height: 1.6;
  font-family: ${props => props.theme.fontFamilies.mono.name};
  margin-bottom: 1em;
`;

export default Footnote;
