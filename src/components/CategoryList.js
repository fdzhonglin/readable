import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CategoryListContainer = styled.div`
`;

const CategoryWrapper = styled.div`
  display: inline-block;
  background-color: #7FDBFF;
  padding: 4px 8px;
  margin: 4px;
  border-radius: 8px;
`;

export default function CategoryList({ categories }) {
  return (
    <CategoryListContainer>
      {categories.length > 0 && categories.map(category => (
        <CategoryWrapper key={category.name}>
          {category.name}
        </CategoryWrapper>
      ))}
    </CategoryListContainer>
  )
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape),
};

CategoryList.defaultProps = {
  categories: [],
};
