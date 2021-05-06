import React from 'react';
import Home from './Home';
import Supply from './Supply';
import Demand from './Demand';
import { Route, Link } from 'react-router-dom';

class App extends React.Component{
  render() {
    return (
      <div>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/supply" component = {Supply} />
        <Route exact path = "/demand" component = {Demand} />
      </div>
    );
  }
}

export default App;