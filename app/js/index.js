import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route} from 'react-router';
import { default as store} from './store';
import injectTapEventPlugin from 'react-tap-event-plugin'
import App from './containers/App';
import Main from './containers';
import '../css/main.css';

injectTapEventPlugin();

render(
  <Provider store={store.store}>
    <Router history={store.history}>
      <App>
        <Route path='/' component={Main} />
      </App>
    </Router>
  </Provider>,
  document.getElementById('app')
);
