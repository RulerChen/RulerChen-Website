import React from 'react';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import BlogPostItem from '@theme-original/BlogPostItem';
import GiscusComponent from '@site/src/components/Comment/Comment';
import useIsBrowser from '@docusaurus/useIsBrowser';

export default function BlogPostItemWrapper(props) {
  const { metadata, isBlogPostPage } = useBlogPost();
  const isBrowser = useIsBrowser();

  const { frontMatter, slug, title } = metadata;

  return (
    <>
      <BlogPostItem {...props} />
      {isBlogPostPage && <GiscusComponent />}
    </>
  );
}
