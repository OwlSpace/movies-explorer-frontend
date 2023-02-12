import {main_server} from './Constans';

class MoviesApi {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _requestResult(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(
        `Ошибка ${res.status}`
      );
    }
  }

  register({name, email, password}) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email, password}),
    })
      .then((res) => this._requestResult(res));
  }

  authorization({email, password}) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password}),
    })
      .then((res) =>this._requestResult(res));
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => this._requestResult(res));
  }

  updateUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    })
      .then((res) => this._requestResult(res));
  }

  getMovies() {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((res) => this._requestResult(res));
  }

  addMovies(data) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
      .then((res) => this._requestResult(res));
  }

  deleteMovies(moviesId) {
    return fetch(`${this._url}/movies/${moviesId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((res) => this._requestResult(res));
  }

  out() {
    return fetch(`${this._url}/signout`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => this._requestResult(res));
  }

}

const mainApi = new MoviesApi({
  url: main_server,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default mainApi;
