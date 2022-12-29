import React from "react";
import SearchForm from "./SearchForm";
import MoviesCardList from "./MoviesCardList";
import cards from "../../utils/ListOfFilms"


function Movies() {

  return (
    <div className="movies">
      <SearchForm/>
      <MoviesCardList cards={cards}/>
      <button type="button" className="movies__more">Ещё</button>
    </div>
  )

}

export default Movies;