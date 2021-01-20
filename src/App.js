import { useState, useEffect } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import { getUser, logout } from './services/userService';
import { getVideoGames } from './services/rawg-api'

import Footer from './components/Footer';
import Header from './components/Header';

import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import VideoGamePage from './pages/VideoGamePage';

import './App.css';

function App(props) {
  
  const [ userState, setUserState ] = useState({
    user: getUser()
  });
  
  const [ videoGameList, setVideoGameList ] = useState({
    count: 0,
    next: null,
    previous: null,
    results: []
  });

  function handleSignupOrLogin() {
    setUserState({
      user: getUser()
    });
  };
  
  function handleLogout() {
    logout();
    setUserState({ user: null });
    props.history.push('/');
  };
  
  async function getAppData() {
    const data = await getVideoGames();
    setVideoGameList(data);
  };

  useEffect(() => {
    getAppData()
  }, []);

  return (
    <div className="App">
      <Header handleLogout={handleLogout} user={userState.user} />
          <Switch>
            <Route exact path="/" render={props =>
              <HomePage
              {...props}
              videoGameList={videoGameList}
              />
            } />
            <Route exact path="/dashboard" render={props =>
              userState.user ?
                <DashboardPage />
                  :
                <Redirect to="/login" />
            } />
            <Route exact path="/signup" render={props =>
              <SignupPage
              {...props}
              handleSignupOrLogin={handleSignupOrLogin}
              />
            } />
            <Route exact path="/login" render={props =>
              <LoginPage
              {...props}
              handleSignupOrLogin={handleSignupOrLogin}
              />
            } />
            <Route exact path="/:id" render={props =>
              <VideoGamePage
              {...props}
              />
            } />
          </Switch>
      <Footer />
    </div>
  );
};

export default withRouter(App);