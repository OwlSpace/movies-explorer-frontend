import React from "react";
import notFound from "../images/404-content.svg"

function NotFound() {

  return(
    <div className="not-found">
      <img src={notFound} alt="ошибка 404" className="not-found__image"/>
      <h2 className="not-found__title">Страница не найдена</h2>
      <a className="not-found__link" href="#">Назад</a>
    </div>
  )
}

export default NotFound;