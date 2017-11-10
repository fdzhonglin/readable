
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Post from './Post';

const PostListContainer = styled.div`
`;

export default function PostList({ posts }) {
  return (
    <PostListContainer>
      {posts.length > 0 && posts.map(post => (
        <Post {...post} key={post.id} />
      ))}
    </PostListContainer>
  )
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape),
};

PostList.defaultProps = {
  posts: [],
};
