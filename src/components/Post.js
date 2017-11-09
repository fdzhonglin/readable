
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostWrapper = styled.div`
  box-shadow: 0 10px 6px -6px #777;
  border: 1px solid #DDDDDD;
  padding: 16px 24px;
  margin: 8px;
`;

const HeadLine = styled.div`
  padding-bottom: 8px;
  display: flex;
  align-items: baseline;
`;

const TitleWrapper = styled.span`
  display: inline-block;
  font-size: 24px;
  font-weight: 600;
  max-width: 240px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const AuthorWrapper = styled.span`
  display: inline-block;
  color: gray;
  margin-left: 4px;
  max-width: 120px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const CategoryWrapper = styled.span`
  background-color: #7FDBFF;
  padding: 0 8px;
  margin: 0 4px;
  border-radius: 8px;
`;

const BodyWrapper = styled.div`
  padding-top: 12px;
  border-top: 1px #DDDDDD solid;
  line-height: 1.6;
`;

export default function Post({ title, author, body, category }) {
  return (
    <PostWrapper>
      <HeadLine>
        <TitleWrapper>
          {title}
        </TitleWrapper>

        <AuthorWrapper>
          by {author}
        </AuthorWrapper>

        <CategoryWrapper>
          {category}
        </CategoryWrapper>
      </HeadLine>
      <BodyWrapper>
        {body}
      </BodyWrapper>
    </PostWrapper>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
