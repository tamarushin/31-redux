import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from '../dashboard/index';
import createStore from '../../lib/store';

const store = createStore();

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <Route path='/' component={Dashboard} />
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}