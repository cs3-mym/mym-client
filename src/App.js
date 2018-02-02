import React, {
  Component
} from 'react';

import {
  Route
} from 'react-router-dom';

// import './App.css';

import HomePage from './pages/HomePage.js';
import SignInPage from './pages/SignInPage.js';
import LoginPage from './pages/LoginPage.js';
// import DefaultPage from './pages/DefaultPage.js';
import ProjectSearchPage from './pages/ProjectSearch.js';
import DashboardPage from './pages/Dashboard.js';
import ProfilePage from './pages/ProfilePage.js';
import ProjectSearch2 from './pages/ProjectSearch2.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/profile" component={ProfilePage}/>
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/signin" component={SignInPage}/>
        <Route exact path="/projects" component={ProjectSearchPage}/>
        <Route exact path="/projects2" component={ProjectSearch2}/>
        <Route exact path="/dashboard" component={DashboardPage}/>
      </div>
    );
  }
}

export default App;
