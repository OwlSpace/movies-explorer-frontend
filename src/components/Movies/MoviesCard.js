import React from "react";

function MoviesCard({id, card, saveFilm}) {
  const {name, link, like, time} = card;
  let cardButtonClassName = `movies-card__button-like ${like && 'movies-card__button-like_active'}`;
  if (saveFilm) {
    cardButtonClassName = 'movies-card__button-delet';
  }

  return(

    <li className="movies-card">
      <img src={link} alt="обложка фильма" className="movies-card__image"/>
      <div className="movies-card__container">
        <h2 className="movies-card__title">{name}</h2>
        <button className={cardButtonClassName} type="button"/>
      </div>
      <div className="line"/>
      <p className="movies-card__time">{time}</p>
    </li>

  )

}

export default MoviesCard;