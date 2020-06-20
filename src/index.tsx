import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes';
import * as store from './mobx';
import { router } from './mobx/';
import { Provider } from 'mobx-react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'mobx-react-router';

import * as serviceWorker from './serviceWorker';
import './plugins/sentry.plugin';

import './index.css';
import 'semantic-ui-css/semantic.min.css';

const rootElement = document.getElementById('root');
const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, router);

ReactDOM.render(
    <React.StrictMode>
        <Provider {...store}>
            <Router history={history}>
                <Routes />
            </Router>
        </Provider>
    </React.StrictMode>,
    rootElement
);

serviceWorker.register();