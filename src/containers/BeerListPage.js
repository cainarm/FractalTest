import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getBeers, stopFetching} from '../actions/beerActions';
import List from '../components/List';
import ListRow from '../components/ListRow';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';

class BeerListPage extends Component{
    componentDidMount(){
      this.props.getBeers(1);
    }
    render(){
        const{
          beers,
          getBeers,
          keepFetching,
          goToProfile
        } = this.props;

        return (
            <div className="beerListContainer">
              <nav> 
                <List
                  data={beers}
                  loadFunc={getBeers}
                  hasMore={!keepFetching}
                  renderRow={row => {
                    return(
                      <ListRow
                        content={row.name}
                        onClick={() => goToProfile(row.id)}
                        key={row.id}
                      />
                    );
                  }}
                />
              </nav>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    beers: state.beerReducer.beers,
    keepFetching: state.beerReducer.fetchingError
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getBeers: async page => {
      try{
        dispatch(await getBeers(page));
      }catch(err){
        dispatch(stopFetching());
      }
    },
    goToProfile: (id) => {
      dispatch(push(`/beer/${id}`));
    }
  };
}

BeerListPage.propTypes = {
  beers: PropTypes.array,
  getBeers: PropTypes.func,
  keepFetching: PropTypes.bool,
  goToProfile: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerListPage);