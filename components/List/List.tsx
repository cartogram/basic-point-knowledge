import React from 'react';
import {Props} from '@shopify/useful-types';
import styled from 'styled-components';

import Item from './Item';

const StyledList = styled.ul`
  width: 100%;
`;

interface ListProps {
  items: Props<typeof Item>['item'][];
  inline?: boolean;
  small?: boolean;
}

function List({items, small}: ListProps) {
  const itemsMarkup = items.map(item => (
    <Item small={small} key={item.title} item={item} />
  ));

  return <StyledList>{itemsMarkup}</StyledList>;
}

export default List;
