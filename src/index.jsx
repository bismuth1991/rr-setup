import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './redux/store';

import Root from './components/Root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  const store = configureStore();

  ReactDOM.render(
    <Root store={store} />,
    root,
  );
});
