import React from 'react';
import Home from './Home';
import Supply from './Supply';
import Demand from './Demand';
import { Route } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import Admin from './Admin';

class App extends React.Component{
  render() {
    return (
      <div className = "app">
        <NavBar></NavBar>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/supply" component = {Supply} />
        <Route exact path = "/demand" component = {Demand} />
        <Route exact path = "/admin" component = {Admin} />
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
