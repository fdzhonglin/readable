import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import IndexPage from './components/IndexPage'
import CategoriesPage from './components/CategoriesPage';
import NoMatch from './components/NoMatch'

import { fetchPosts } from './actions/post_actions';




class App extends Component {
  componentDidMount = () => {
    this.props.fetchData();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <IndexPage />
            )}
          />

          <Route
            exact
            path="/categories"
            render={() => (
              <CategoriesPage />
            )}
          />

          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
