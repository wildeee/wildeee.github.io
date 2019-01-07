import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import About from './About';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Header}/>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
        </div>
      </Router>
    );
  }
}

export default App;
