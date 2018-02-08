import reducer from '../reducers/beerReducer';
import initialState from './initialState';
import * as types from '../constants/actionTypes';
import { expect } from 'chai';

describe('Beers Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).equal(initialState.beerReducer);
  });
  
  it('should add beers to the list', () => {
    let array = [{id: 1}, {id: 2}, {id:4}];

    let rd = reducer(undefined, {
      type: types.ADD_BEERS_TO_LIST,
      payload:array
    });

    expect(rd.beers).to.have.length(3);
    expect(rd.beers).to.include.members(array);
  });

  it('should set the fetchingError to FALSE', () => {

    let rd = reducer(undefined, {
      type: types.STOP_FETCHING_BEER_LIST,
      payload: false
    });

    expect(rd.fetchingError).to.equal(true);
  });


  it('should set the target beer', () => {
    let targetBeer = {
      id: 1,
      name: "TESTE",
      tagline: "TESTE",
      image_url: "http://odskosdosdosd.com",
      description: "LOREM IPSUM DOLOR SET AMET"
    };
    

    let rd = reducer(undefined, {
      type: types.ADD_BEERS_TO_LIST,
      payload: [targetBeer]
    });

    rd = reducer(rd, {
      type: types.SET_TARGET_BEER,
      payload: 1
    });

    expect(rd.beer).to.equal(targetBeer);
  });


});
