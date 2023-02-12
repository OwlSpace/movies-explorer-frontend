import React, {useEffect, useState} from "react";
import SearchForm from "../Movies/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList";
import mainApi from "../../utils/MainApi";

function SavedMovies() {
  const savedMovies = true;
  const [saveFilm, setSaveFilm] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [saveFilmsTumbler, setSaveFilmsTumbler ] = useState([]);
  const [checkbox, setCheckbox] = useState(false);

  useEffect(() => {
    getMoviesSaveFilm();
  }, []);

  function getMoviesSaveFilm() {
    mainApi.getMovies()
      .then((films) => {
        setSaveFilm(films);
      })
      .catch((err) => console.log(err));
  }

  function searchSaveFilms(search = searchValue, checkbox) {
    let listOfFoundSaveFilms = saveFilm.filter(({nameRU, nameEN}) => nameRU.toLowerCase().includes(search.toLowerCase())
      || nameEN.toLowerCase().includes(search.toLowerCase()));

    if (checkbox) {
      listOfFoundSaveFilms = listOfFoundSaveFilms.filter(({duration}) => duration <= 40);
    }

    setSaveFilm(listOfFoundSaveFilms);
    setSearchValue('');
  }

  function handelSaveFilmsTumbler(checkbox) {
    if (checkbox) {
      setSaveFilmsTumbler(saveFilm);
      const shortSaveFilm = saveFilm.filter(({duration}) => duration <= 40);
      setSaveFilm(shortSaveFilm);
    } else {
      setSaveFilm(saveFilmsTumbler);
    }
  }

  async function deleteMovies(card) {
      await mainApi.deleteMovies(card._id);
      const allFilmSeve = await mainApi.getMovies();
      setSaveFilm(allFilmSeve);
  }

  return (
    <section className="seved-movies">
      <SearchForm
        checkbox={checkbox}
        setCheckbox={setCheckbox}
        handelTumbler={handelSaveFilmsTumbler}
        searchFilms={searchSaveFilms}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <MoviesCardList
        cards={saveFilm}
        savedMovies={savedMovies}
        toggleLike={deleteMovies}
      />
    </section>
  )

}

export default SavedMovies;