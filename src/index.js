/* eslint-disable global-require */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import AppContainer from 'react-hot-loader/lib/AppContainer';
import App from './App/App.js';
import configureStore from './store/configureStore.js';

const history = createHistory();
const { store } = configureStore(history, window.REDUX_STATE);

const render = App => {
  const root = document.getElementById('root');

  ReactDOM.hydrate(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>,
    root
  );
};

render(App);

if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept('./App/App.js', () => {
    const App = require('./App/App.js').default;

    render(App);
  });
}
