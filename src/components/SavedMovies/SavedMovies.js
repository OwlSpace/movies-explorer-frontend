import React from "react";
import SearchForm from "../Movies/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList";
import likesFilm from "../../utils/ListLikeOfFilm"

function SavedMovies() {
  const saveFilm = true;

  return (
    <div>
      <SearchForm/>
      <MoviesCardList
        cards={likesFilm}
        saveFilm={saveFilm}
      />
    </div>
  )

}

export default SavedMovies;