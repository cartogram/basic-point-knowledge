import React from 'react';
import styled from 'styled-components';

import Footnote from '../Footnote';
import Heading from '../Heading';
import A from '../A';

const StyledItem = styled.li``;

interface Item {
  slug?: string;
  title: string;
  date?: string;
  permalink?: string;
  small?: boolean;
}

interface Props {
  item: Item;
  small?: boolean;
}

function Item({small, item: {title, slug, permalink}}: Props) {
  const textMarkup = small ? (
    <Footnote>{title}</Footnote>
  ) : (
    <Heading>{title}</Heading>
  );

  const linkMarkup = permalink ? (
    <A external href={permalink}>
      {textMarkup}
    </A>
  ) : (
    <A href="/[pid]" as={`/${slug}`}>
      {textMarkup}
    </A>
  );
  return <StyledItem>{linkMarkup}</StyledItem>;
}

export default Item;
