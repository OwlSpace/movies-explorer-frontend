import React from "react";

function Footer() {

  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__container">
        <p className="footer__year">&copy;2022</p>
        <nav className="footer__nav">
          <ul className="footer__list">
            <li className="footer__list-item">
              <a href="https://practicum.yandex.ru/" className="footer__list-item-link"
                 target="_blank">Яндекс.Практикум</a>
            </li>
            <li className="footer__list-item">
              <a href="https://github.com/OwlSpace" className="footer__list-item-link" target="_blank">Github</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )

}

export default Footer;