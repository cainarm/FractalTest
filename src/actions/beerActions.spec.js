import * as actions from './beerActions';
import configureMockStore from 'redux-mock-store';
import initialState from '../reducers/initialState';
import * as types from '../constants/actionTypes';
import { expect } from 'chai';
import thunk from 'redux-thunk';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('beer actions', () => {
  it('should fetch a list of beers', async () => {
    let action = await actions.getBeers(1);

    expect(action.type).equal(types.ADD_BEERS_TO_LIST);
    expect(action.payload).to.have.length(15);
  });

  it('should set a target beer', async () => {
    const store = mockStore(initialState);
    await store.dispatch(actions.setTargetBeer(1));
    const act = store.getActions();
    
    expect(act[0].type).to.equal(types.ADD_BEERS_TO_LIST);
    expect(act[1].type).to.equal(types.SET_TARGET_BEER);
  });

  it('set fetchingError to true(causes the list to stop loading data on scroll)', () => {
    let action = actions.stopFetching();
    
    expect(action.type).equal(types.STOP_FETCHING_BEER_LIST);
  });
});