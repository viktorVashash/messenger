import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import friends from './friends';
import messages from './messages';

const rootReducer = combineReducers({
  routing,
  friends,
  messages
});

export default rootReducer;
