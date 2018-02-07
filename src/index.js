import React from 'react';
import ReactDOM from 'react-dom';

// import {
//   Provider
// } from 'react-redux';
// import ReduxPromise from 'redux-promise';

// import {
//   createStore,
//   applyMiddleware
// } from 'redux';
import {
  BrowserRouter as Router
} from 'react-router-dom';

// import { reducer } from './reducers/reducer.js';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
// const store = createStoreWithMiddleware(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  // <Provider store={store}>
  <Router>
    <App/>
  </Router>
  // </Provider>
  , document.getElementById('root'));
registerServiceWorker();
