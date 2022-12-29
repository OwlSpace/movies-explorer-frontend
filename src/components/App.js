import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Register from "./Register";
import Login from "./Login";
import Profile from "./Profile";
import NotFound from "./NotFound";
import Movies from "./Movies/Movies";
import Footer from "./Footer/Footer";
import SavedMovies from "./SavedMovies/SavedMovies";


function App() {

  const history = useHistory();
  const pathName = history.location.pathname;

  return (
    <div className="app">

      {pathName === '/' || pathName === '/movies' || pathName === '/saved-movies' || pathName === '/profile' ?
        <Header
          pathName = {pathName}
        />
        :
        ''
      }

      <Switch>
        <Route path="/movies">
          <Movies/>
        </Route>

        <Route path='/saved-movies'>
          <SavedMovies/>
        </Route>

        <Route path='/profile'>
          <Profile/>
        </Route>

        <Route path='/signin'>
          <Login/>
        </Route>

        <Route path='/signup'>
          <Register/>
        </Route>

        <Route exact path='/'>
          <Main/>
        </Route>

        <Route path='*'>
          <NotFound/>
        </Route>
      </Switch>

      {pathName === '/' || pathName === '/movies' || pathName === '/saved-movies'  ?
        <Footer/>
        :
        ''
      }

    </div>
  );
}

export default App;
