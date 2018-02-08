import React from 'react';
import PropTypes from 'prop-types';
import BeerListPage from './../containers/BeerListPage';
import BeerPage from '../containers/BeerPage';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={BeerListPage} />
          <Route exact path="/beer/:id" component={BeerPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
