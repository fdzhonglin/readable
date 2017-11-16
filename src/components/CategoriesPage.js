import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CategoryList from './CategoryList'

export default function CategoriesPage({ categories }) {
  return (
    <div>
      Category Page
      <CategoryList categories={categories} />
    </div>
  )
}

CategoriesPage.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape),
};

CategoriesPage.defaultProps = {
  categories: [],
};
