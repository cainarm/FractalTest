import initialState from './initialState';
import {ADD_BEERS_TO_LIST, SET_TARGET_BEER, STOP_FETCHING_BEER_LIST} from '../constants/actionTypes';

export default function beerReducer(state = initialState.beerReducer, action) {
  switch(action.type){
    case ADD_BEERS_TO_LIST:
      state = {
        ...state,
        beers: [
          ...state.beers,
          ...action.payload
        ]
      };
    break; 
    case  STOP_FETCHING_BEER_LIST:
      state = {
        ...state,
        fetchingError: true
      };
    break;
    case SET_TARGET_BEER:
    
      state = {
        ...state,
        beer: state.beers.filter(beer => beer.id === parseInt(action.payload))[0]
      };
    break;
  }
  return state;
}
