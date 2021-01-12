import { useState } from 'react';

// import { getUser, logout } from './services/userService';

import Footer from './components/Footer';
import Header from './components/Header';

import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

import './App.css';

import { Redirect, Route, Switch, withRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
        <main>
          <Switch>
            <Route exact path="/" render={props =>
              <HomePage />
            } />
            <Route exact path="/dashboard" render={props =>
              <DashboardPage />
            } />
            <Route exact path="/signup" render={props =>
              <SignupPage {...props} />
            } />
            <Route exact path="/login" render={props =>
              <LoginPage {...props} />
            } />
          </Switch>
        </main>
      <Footer />
    </div>
  );
}

export default App;
