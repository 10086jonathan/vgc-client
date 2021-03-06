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
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {
  
  const [ userState, setUserState ] = useState({
    user: getUser()
  });
  
  const [ videoGameData, setVideoGameData ] = useState({
    count: 0,
    next: null,
    previous: null,
    results: []
  });

  // const commentData = [
  //   { id: 1, alias: 'jon10086', comment: 'alsdfj;lak;a;lkdfj', rating: 5 },
  //   { id: 2, alias: 'jona10086', comment: ';lkd65sdfgs65dfgh46d4fj', rating: 4 },
  //   { id: 3, alias: 'jonathan10086', comment: 'alsdf234kllgh234qw5;lkdfj', rating: 3 }
  // ]

  const [ comments, setComments ] = useState({
    id: 0,
    alias: "",
    comment: "",
    rating: 0
  });

  const [ currentComment, setCurrentComment ] = useState()

  const [ commentEdit, setCommentEdit ] = useState(false);


  function getInitialFormState() {
    return {
        id: null,
        alias: "",
        comment: "",
        rating: 5
    }
};

  function addComment(comment) {
    comment.id = comments.length + 1
    setComments([...comments, comment]);
  };

  function deleteComment(id) {
    setCommentEdit(false);

    setComments(comments.filter((comment) => comment.id !== id));
  };

  function editComment(comment) {
    setCommentEdit(true);

    setCurrentComment({
      id: comment.id,
      alias: comment.alias,
      comment: comment.comment,
      rating: comment.rating
    })
  };

  function updateComment(id, updatedComment) {
    setCommentEdit(false);

    setComments(comments.map((comment) => (comment.id === id ? updatedComment : comment)))
  }

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
  
  
  function findOne(gameid) {
    return videoGameData.results.find(game => game.id === Number(gameid))
  }
  
  useEffect(() => {
    async function getAppData() {
      const { data } = await getVideoGames();
      setVideoGameData(data);
    };

    getAppData();

  }, []);


  return (
    <main style={{ backgroundColor: "#20232a" }}>
      <Header handleLogout={handleLogout} user={userState.user} />
          <Switch>
            <Route exact path="/" render={props =>
              <HomePage
              {...props}
              videoGameData={videoGameData.results}
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
            <Route exact path="/:id" render={props =>{
              if(!userState.user) return <Redirect to="/login" />
              return <VideoGamePage
              {...props}
              game={findOne(props.match.params.id)}
              comments={comments}
              addComment={addComment}
              deleteComment={deleteComment}
              getInitialFormState={getInitialFormState}
              editComment={editComment}
              commentEdit={commentEdit}
              currentComment={currentComment}
              updateComment={updateComment}
              setCommentEdit={setCommentEdit}
              />
            }
            } />
          </Switch>
      <Footer />
    </main>
  );
};

export default withRouter(App);