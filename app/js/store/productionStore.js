import {createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux';
import {hashHistory, browserHistory} from 'react-router';
import reducers from '../reducers/index';

const middleware = routerMiddleware(hashHistory);
const storeWithMiddleware = applyMiddleware(thunk, promise, middleware)(createStore);
const store = storeWithMiddleware(reducers);
const history = syncHistoryWithStore(browserHistory, store);

export default {
  store,
  history
};
