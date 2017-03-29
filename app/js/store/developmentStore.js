import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import {createLogger} from 'redux-logger';
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'
import reducers from '../reducers/index';

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const middleware = routerMiddleware(createHistory());
const storeWithMiddleware = applyMiddleware(thunk, promise, createLogger(), middleware)(createStore);
const store = storeWithMiddleware(reducers, enhancers);
const history = syncHistoryWithStore(createHistory(), store);

export default {
  store,
  history
};
