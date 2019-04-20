import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import ShowGroup from './containers/Screens/ShowGroup';
import Gallery from './containers/Screens/Gallery';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Switch>
          <Route exact path="/groups/" component ={ShowGroup} />
          <Route exact path="/gallery/" component ={Gallery}/>
          <Redirect from="/" to="/groups/" />
        </Switch>
      </Router>
      
      </div>
    );
  }
}

export default App;
