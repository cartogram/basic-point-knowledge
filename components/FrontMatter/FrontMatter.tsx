import React from 'react';
import styled from 'styled-components';

import {formatDate} from '../../utilities/formatDate';
import {respondTo} from '../../styles/utils';
import Mast from '../Mast';
import {Tag} from '../../content';
import Footnote from '../Footnote';

interface Props {
  title: string;
  tags?: Tag[];
  date: string;
}

const StyledFrontMatter = styled.div<Partial<Props>>`
  text-align: center;
  padding-bottom: ${props => props.theme.emSizes[10]};
  ${respondTo.md`
    max-width: 50%;
  `};
`;

const Strong = styled.span<Partial<Props>>`
  font-weight: bold;
`;

export default function FrontMatter({title, tags, date}: Props) {
  const formatedDate = formatDate(date);

  const tagMarkup =
    tags && tags.length && tags.map(tag => <Strong key={tag}>{tag}</Strong>);
  return (
    <StyledFrontMatter>
      <Mast>{title}</Mast>
      <Footnote>
        posted in {tagMarkup} / last updated <Strong>{formatedDate}</Strong>
      </Footnote>
    </StyledFrontMatter>
  );
}
