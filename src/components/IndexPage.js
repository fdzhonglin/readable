import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import PostList from './PostList';

const PageContainer = styled.div`
  background-color: #F5F5F5;
`;

const mapStateToProps = state => (
  {
    posts: state.posts || [],
  }
);

const mapDispatchToProps = () => ({});

const IndexPage = ({ posts }) => (
  <PageContainer>
    <PostList posts={posts} />
  </PageContainer>
);

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
