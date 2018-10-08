import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path ='/' component={Welcome} /> 
          <Route exact path ='/home' component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
