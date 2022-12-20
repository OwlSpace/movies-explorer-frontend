import React from "react";
import MoviesCard from "./MoviesCard";

function MoviesCardList({cards, saveFilm}) {
  const moviesCardElement = cards.map((card, id) => (
    <MoviesCard
      key={id}
      card={card}
      saveFilm={saveFilm}
    />
    )
  )

  return(
    <div className="movies-cardc-list">
      <ul className={`movies-cardc-list__list ${saveFilm && "movies-cardc-list__list_saved-movies"}`}>
        {moviesCardElement}
      </ul>
    </div>

  )
}

export default MoviesCardList;