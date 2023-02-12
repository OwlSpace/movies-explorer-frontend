import React, {useEffect, useState} from "react";
import SearchForm from "./SearchForm";
import MoviesCardList from "./MoviesCardList";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import {
  movies_server,
  searchError,
  addCardError,
  deleteCardError,
  serverMoviesError,
  firstEntry
} from "../../utils/Constans"
import Preloader from "../Preloader/Preloader";

function Movies({popup}) {

  const [films, setFilms] = useState([]);
  const [allFilms, setAllFilms] = useState([]);
  const [moviesCount, setMoviesCout] = useState([]);
  const [listFoundMovies, setListFoundMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [preloader, setPreloader] = useState(false);
  const [filmSave, setFilmSave] = useState([]);
  const [message, setMessage] = useState(firstEntry);

  useEffect(() => {
    getMoviesFilm();
    setMoviesCout(countMovies());

    const handlerResize = () => setMoviesCout(countMovies());

    window.addEventListener('resize', handlerResize);
    return () => {
        window.removeEventListener('resize', handlerResize);
    };
  }, [window.innerWidth])


  useEffect(() => {

    const searh = localStorage.getItem('searchValue');
    let intermediateValueCheckbox = checkbox;


    if (localStorage.getItem('checkbox') === "true") {
      intermediateValueCheckbox = true;
    }
    if (searh) {
      setSearchValue(searh);
      searchFilms(searh, intermediateValueCheckbox);
    }
  }, [allFilms])

  function countMovies() {
    let cardsCount;
    const width = document.documentElement.clientWidth;
    const requiredNumberMovies = {
      '1200': [16, 4],
      '820': [12, 3],
      '700': [8, 2],
      '550': [6, 2],
      '300': [4, 1],
    }

    Object.keys(requiredNumberMovies)
      .sort((a, b) => a - b)
      .forEach((key) => {
        if (width > +key) {
          cardsCount = requiredNumberMovies[key];
        }
      });

    return cardsCount;
  }

  function getMoviesFilm() {
    moviesApi.getMovies()
      .then((films) => {
        setAllFilms(films);
      })
      .catch(() => {
        popup(serverMoviesError)
      });

    mainApi.getMovies()
      .then((films) => {
        setFilmSave(films);
      })
      .catch(() => {
        popup(serverMoviesError)
      });
  }

  function searchFilms(search = searchValue, checkbox) {

    let certainNumberOfFilms;
    let listOfFoundFilms;
    setMessage('');

    if (!search) {
      popup(searchError);
      return;
    }

    setPreloader(true);

    try {
      listOfFoundFilms = allFilms.filter(({nameRU, nameEN}) => nameRU.toLowerCase().includes(search.toLowerCase())
        || nameEN.toLowerCase().includes(search.toLowerCase()));

      localStorage.setItem('searchValue', search);
      localStorage.setItem('searchFilms', JSON.stringify(listOfFoundFilms));

      if (checkbox) {
        listOfFoundFilms = listOfFoundFilms.filter(({duration}) => duration <= 40);
      }

      certainNumberOfFilms = listOfFoundFilms.splice(0, moviesCount[0]);

      setFilms(certainNumberOfFilms);
      setListFoundMovies(listOfFoundFilms);
      setCheckbox(checkbox);
    } catch (e) {
      popup(serverMoviesError);
      setFilms([]);
    }
    setTimeout(() => setPreloader(false), 1000);
  }

  function handelTumbler(checkbox) {
    let shortFilm = [];
    let allShortFilm = [];
    localStorage.setItem('checkbox', checkbox);

    if (checkbox) {
      const listFilms = films.concat(listFoundMovies);
      allShortFilm = listFilms.filter(({duration}) => duration <= 40);
      shortFilm = allShortFilm.splice(0, moviesCount[0]);
      setFilms(shortFilm);
      setListFoundMovies(allShortFilm);
    } else {
      searchFilms(localStorage.getItem('searchValue'), checkbox);
    }
  }

  function moreSearch(e) {
    e.preventDefault();

    const newFilmList = listFoundMovies;
    const moreListFilm = films.concat(newFilmList.splice(0, moviesCount[1]));

    setFilms(moreListFilm);
    setListFoundMovies(newFilmList);
  }

  async function toggleLikeMovies(card, like) {
    if (like) {
      const newFilmSeve = {
        country: card.country || '',
        director: card.director,
        duration: card.duration,
        year: card.year,
        description: card.description,
        image: movies_server + card.image.url,
        trailerLink: card.trailerLink,
        thumbnail: movies_server + card.image.url,
        movieId: card.id,
        nameRU: card.nameRU,
        nameEN: card.nameEN,
      }
      try {
        await mainApi.addMovies(newFilmSeve);
        const allFilmSeve = await mainApi.getMovies();
        setFilmSave(allFilmSeve);
      } catch (e) {
        popup(addCardError);
      }
    } else {
      try {
        await mainApi.deleteMovies(card._id);
        const allFilmSeve = await mainApi.getMovies();
        setFilmSave(allFilmSeve);
      } catch (e) {
        popup(deleteCardError);
      }
    }
  }

  return (
    <div className="movies">
      <SearchForm
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchFilms={searchFilms}
        checkbox={checkbox}
        setCheckbox={setCheckbox}
        handelTumbler={handelTumbler}
      />
      {preloader ? <Preloader/> : ''}
      {message ? message : ''}
      <MoviesCardList
        cards={films}
        toggleLike={toggleLikeMovies}
        filmSave={filmSave}
        message={message}
      />
      {listFoundMovies.length > 0 ?
        <button type="button" className="movies__more" onClick={moreSearch}>Ещё</button> : ""}
    </div>
  )
}

export default Movies;
