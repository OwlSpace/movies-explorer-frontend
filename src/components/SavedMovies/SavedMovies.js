import React from "react";
import SearchForm from "../Movies/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList";
import likesFilm from "../../utils/ListLikeOfFilm"

function SavedMovies() {
  const saveFilm = true;

  return (
    <section className="seved-movies">
      <SearchForm/>
      <MoviesCardList
        cards={likesFilm}
        saveFilm={saveFilm}
      />
    </section>
  )

}

export default SavedMovies;