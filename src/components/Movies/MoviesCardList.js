import React from "react";
import MoviesCard from "./MoviesCard";

function MoviesCardList({cards, toggleLike, filmSave, savedMovies, message}) {

  const moviesCardElement = cards.map((card, id) => (
      <MoviesCard
        key={id}
        card={card}
        toggleLike={toggleLike}
        filmSave={filmSave}
      />
    )
  )

  return (
    <section className="movies-cardc-list">
      <ul className={`movies-cardc-list__list ${savedMovies && "movies-cardc-list__list_saved-movies"}`}>
        {
          (cards.length > 0) ? moviesCardElement :
            message ? '' : 'Ничего не найдено'
        }
      </ul>
    </section>

  )
}

export default MoviesCardList;