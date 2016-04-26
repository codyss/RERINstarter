import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';

import App from './containers/app.jsx';
import rootReducer from './reducers';

// create Redux store and apply thunk middleware for async actions
const store = createStore(rootReducer, {}, compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : undefined
    ));

// render root component
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
