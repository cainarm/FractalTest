import { combineReducers } from 'redux';
import beerReducer from './beerReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  beerReducer,
  routing: routerReducer
});

export default rootReducer;
