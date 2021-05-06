import React from 'react';
import Home from './Home';
import Supply from './Supply';
import Demand from './Demand';
import { Route, Link } from 'react-router-dom';
import NavBar from './NavBar';

class App extends React.Component{
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/supply" component = {Supply} />
        <Route exact path = "/demand" component = {Demand} />
      </div>
    );
  }
}

export default App;
