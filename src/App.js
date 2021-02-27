import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import MainPage from './pages/home';

class App extends Component {
  render() {
    return (

      <Router>
        <Route exact path="/">
          <MainPage />

        </Route>
      </Router>
    );
  }
}

export default App;
