import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Header from './app/Header';
import Home from './app/Home';
import About from './app/About';
import MainTheme from './themes/MainTheme';

class App extends Component {
  render() {
    return (
      <MainTheme>
        <Router>
          <div>
            <Route path="/" component={Header}/>
            <Route path="/" exact component={Home}/>
            <Route path="/about" exact component={About}/>
          </div>
        </Router>
      </MainTheme>
    );
  }
}

export default App;
