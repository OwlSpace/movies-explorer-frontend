import React from "react";

function Portfolio() {
  return (
    <div className="portfolio">
      <p className="portfolio__title">Портфолио</p>
      <ul className="portfolio__list">
        <li className="portfolio__list-element">
          <a href="https://owlspace.github.io/how-to-learn/" target="_blank" className="portfolio__list-link">Статичный сайт</a>
        </li>
        <li className="portfolio__list-element">
          <a href="https://owlspace.github.io/russian-travel/index.html" target="_blank" className="portfolio__list-link">Адаптивный сайт</a>
        </li>
        <li className="portfolio__list-element">
          <a href="https://owlspace.github.io/react-mesto-auth" target="_blank" className="portfolio__list-link">Одностраничное приложение</a>
        </li>
      </ul>
    </div>
  )
}

export default Portfolio;