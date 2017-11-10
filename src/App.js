import React, { Component } from 'react';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import IndexPage from './components/IndexPage'
import NoMatch from './components/NoMatch'

import reducers from './reducers'

const store = createStore(
  combineReducers({
    ...reducers,
  })
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <IndexPage />
            )}
          />

          <Route component={NoMatch} />
        </Switch>
      </Provider>
    );
  }
}

export default App;
