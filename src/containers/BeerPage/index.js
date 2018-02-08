import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setTargetBeer } from '../../actions/beerActions';
import PropTypes from 'prop-types';
import './styles.scss';

class BeerPage extends Component{
    componentDidMount(){
        this.props.getBeer(this.props.match.params.id);
    }
    
    render(){
        const {
            image_url,
            name,
            description,
            tagline
        } = this.props.beerData;

        return(
            <div className="beerPageContainer">
                <img src={image_url} alt={name} className="mainImage"/>
                <div className="beerData"> 
                    <h1>{name}</h1>
                    <h3>{tagline}</h3>
                    {description}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    beerData: state.beerReducer.beer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getBeer:(id) => {
        dispatch(setTargetBeer(id));
    }
  };
}

BeerPage.propTypes = {
    beerData: PropTypes.object,
    getBeer: PropTypes.func,
    match: PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerPage);