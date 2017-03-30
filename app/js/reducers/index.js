import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import friends from './friends';
import messeges from './messeges'

const rootReducer = combineReducers({
  routing,
  friends,
  messeges
});

export default rootReducer;
