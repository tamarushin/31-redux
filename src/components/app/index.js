import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from '../dashboard';
import store from '../../lib/store';

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