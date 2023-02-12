import {movies_server} from './Constans';

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

  getMovies() {
    return fetch(`${this._url}/beatfilm-movies`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._requestResult);
  }

}

const moviesApi = new MoviesApi({
  url: movies_server,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default moviesApi;
