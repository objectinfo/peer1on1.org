import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import {
  Card,
  CardLink,
} from '../core';

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 360px);
  grid-auto-rows: 400px;
  grid-gap: 30px;
`;

export default function PostListing(props) {
    function getPostList(props) {
        const { postEdges } = props
        const postList = postEdges
          .filter(postEdge => postEdge.node.frontmatter.template === 'post')
          .map(postEdge => {
            return {
              path: postEdge.node.fields.slug,
              tags: postEdge.node.frontmatter.tags,
              thumbnail: postEdge.node.frontmatter.thumbnail,
              title: postEdge.node.frontmatter.title,
              date: postEdge.node.fields.date,
              excerpt: postEdge.node.excerpt,
              timeToRead: postEdge.node.timeToRead,
              categories: postEdge.node.frontmatter.categories,
            }
          })
        return postList
    }
    
   const renderPost = (post, index) => {
    return (
      <CardLink to={post.path} key={post.title}>
        <Card
          heading={post.title}
          subheading={post.category ? post.category : ''}
          content={post.subtitle || post.excerpt}
          footer={<Button>READ MORE</Button>}
          src={post.thumbnail ? post.thumbnail.childImageSharp.fluid.src : null}
        />
      </CardLink>
    );
  };

  const postList = getPostList(props);

  return (
    <div style={{ width: '100%' }}>
      <CardGrid>
        {postList.map(renderPost)}
      </CardGrid>
    </div>
  );
}

