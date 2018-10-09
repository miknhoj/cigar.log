import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import Home from './components/Home'
import User from './components/User'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path ='/' component={Welcome} /> 
          <Route exact path ='/home' component={Home} />
          <Route exact path ='/users/:userId' component={User}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
