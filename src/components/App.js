import React, {useState, useEffect} from "react";
import {Redirect, Route, Switch, useHistory, useLocation} from "react-router-dom";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Register from "./Register";
import Login from "./Login";
import Profile from "./Profile";
import NotFound from "./NotFound";
import Movies from "./Movies/Movies";
import Footer from "./Footer/Footer";
import SavedMovies from "./SavedMovies/SavedMovies";
import Popup from "./Popup/Popup";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import ProtectedRoute from "./ProtectedRoute";
import mainApi from "../utils/MainApi";
import {registerError, loginError, serverError, serverMoviesError} from "../utils/Constans";


function App() {

  const history = useHistory();
  const {pathname} = useLocation();

  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: '',
  });

  const [isLoading, setIsLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [statePopup, setStatePopup] = useState(false);
  const [textError, setTextError] = useState('');

  useEffect(() => {
    mainApi.getUserInfo()
      .then((user) => {
        setLoggedIn(true);
        setCurrentUser(user);
      })
      .catch(() => {
        console.log(serverError);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [loggedIn])


  function regist(name, email, password) {
    mainApi.register({name, email, password})
      .then((user) => {
        setLoggedIn(true);
        setCurrentUser(user);
        history.push('/movies');
      })
      .catch(() => {
        setTextError(registerError);
      });
  }

  function lodin(email, password) {
    mainApi.authorization({email, password})
      .then((user) => {
        setLoggedIn(true);
        setCurrentUser(user);
      })
      .catch(() => {
        setTextError(loginError);
      });
  }

  function closePopup(e) {
    e.preventDefault();
    setStatePopup(false);
    setTextError('');
  }

  function openPopup(textError) {
    setTextError(textError);
    setStatePopup(true);
  }

  function out(e) {
    e.preventDefault();
    mainApi.out()
      .then(() => setLoggedIn(false))
      .catch(() => openPopup(serverMoviesError));
    localStorage.removeItem('searchValue');
    localStorage.removeItem('checkbox');
    localStorage.removeItem('searchFilms');
  }

  return (
    <div className="app">

      <CurrentUserContext.Provider value={currentUser}>

        {pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile' ?
          <Header
            loggedIn={loggedIn}
          />
          :
          ''
        }

        <Switch>
          <ProtectedRoute
            path="/movies"
            popup={openPopup}
            isLoading={isLoading}
            loggedIn={loggedIn}
            component={Movies}
          />


          <ProtectedRoute
            path='/saved-movies'
            component={SavedMovies}
            isLoading={isLoading}
            loggedIn={loggedIn}
          />

          <ProtectedRoute
            path='/profile'
            component={Profile}
            userInfo={currentUser}
            isLoading={isLoading}
            loggedIn={loggedIn}
            out={out}
            popup={openPopup}
          />

          <Route exact path='/' loggedIn={loggedIn}>
            <Main/>
          </Route>

          <Route path='/signin'>
            {
              loggedIn ? <Redirect to='/movies'/> : <Login onLogin={lodin} textError={textError}/>
            }
          </Route>

          <Route path='/signup'>
            {
              loggedIn ? <Redirect to='movies'/> : <Register onRegist={regist} textError={textError}/>
            }
          </Route>

          <Route path='*'>
            <NotFound/>
          </Route>
        </Switch>

        {pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' ?
          <Footer/>
          :
          ''
        }

        <Popup
          statePopup={statePopup}
          closePopup={closePopup}
          textError={textError}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
