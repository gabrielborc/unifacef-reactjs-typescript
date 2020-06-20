import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './plugins/sentry.plugin'
import './index.css';

ReactDOM.render(
  <React.StrictMode>
      <h1>Hello World!</h1>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.register();