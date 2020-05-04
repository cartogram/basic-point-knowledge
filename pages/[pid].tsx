import React from 'react';
import ReactMarkdown from 'react-markdown';

import {posts} from '../content';
import {RawHtml, Content, FrontMatter} from '../components';

interface Props {
  post: any;
}
function Post({post}: Props) {
  const {slug} = post || {};
  const content = slug && require(`../content/${slug}.md`).default;

  return (
    <Content>
      <FrontMatter {...post} />
      <RawHtml>
        <ReactMarkdown escapeHtml={false} source={content || ''} />
      </RawHtml>
    </Content>
  );
}

export default Post;

function getPostBySlug(args: string | string[]): Promise<any> {
  const slug = Array.isArray(args) ? args[0] : args;
  return Promise.resolve(posts.find(post => post.slug === slug));
}

Post.getInitialProps = async (ctx: any) => {
  const post = await getPostBySlug(ctx.query.pid);

  return {post};
};
