import React from 'react';

import {posts} from '../content';
import {List, Content} from '../components';

function Home() {
  return (
    <Content>
      <List items={posts} />
    </Content>
  );
}

export default Home;
