import { getBeers as get, getBeerById} from '../api/Beer';
import {ADD_BEERS_TO_LIST, SET_TARGET_BEER, STOP_FETCHING_BEER_LIST} from '../constants/actionTypes';

export async function getBeers(page){
    let beers = await get(page);

    if(beers.data.length >= 1){
        return {
            type: ADD_BEERS_TO_LIST,
            payload: beers.data
        };
    }
    else{
        return stopFetching();
    }
}

export function setTargetBeer(id){
    return async (dispatch, getState) => {
        let state = getState();
        let beers = state.beerReducer.beers;
        
        if(!beers.length){
            let beer = await getBeerById(id);
            dispatch({
                type: ADD_BEERS_TO_LIST,
                payload: beer.data
            });
        }

        return dispatch({
            type: SET_TARGET_BEER,
            payload: id
        });
    };

}

export function stopFetching(){
    return{
        type:  STOP_FETCHING_BEER_LIST,
        payload: false
    };
}