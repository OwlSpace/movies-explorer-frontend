import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

function MoviesCard({card, toggleLike, filmSave}) {

  const {pathname} = useLocation();
  const {nameRU, image, duration, trailerLink} = card;
  const [like, setLike] = useState(false);

  useEffect(() => {
    if (pathname !== "/saved-movies") {
      const savedFilm = filmSave.filter((obj) => obj.movieId === card.id);
      if (savedFilm.length > 0) {
        setLike(true);
      } else {
        setLike(false);
      }
    }

  }, [filmSave, pathname, card.id])


  function handleLike() {
    const newLike = !like;
    const savedFilm = filmSave.filter((film) => film.movieId === card.id);

    toggleLike({...card, _id: savedFilm.length > 0 ? savedFilm[0]._id : null}, newLike);
  }

  function handleDelete() {
    toggleLike(card);
  }

  function timeFilm(duration) {
    return `${Math.floor(duration / 60)}ч ${duration % 60}м`
  }

  return (

    <li className="movies-card">
      <a href={trailerLink} target="_blank" rel="noreferrer">
        <img src={pathname === '/movies' ? `https://api.nomoreparties.co${image.url}` : `${card.image}`}
             alt="обложка фильма"
             className="movies-card__image"
        />
      </a>
      <div className="movies-card__container">
        <h2 className="movies-card__title">{nameRU}</h2>
        {
          pathname === '/saved-movies' ?
            <button className='movies-card__button-delet' type="button" onClick={handleDelete}/> :
            <button className={`movies-card__button-like ${like && 'movies-card__button-like_active'}`} type="button"
                    onClick={handleLike}/>
        }

      </div>
      <div className="line"/>
      <p className="movies-card__time">{timeFilm(duration)}</p>
    </li>

  )

}

export default MoviesCard;