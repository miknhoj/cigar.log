import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Welcome from './components/Welcome'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path ='/' component={Welcome} /> 
        </Switch>
      </Router>
    );
  }
}

export default App;
