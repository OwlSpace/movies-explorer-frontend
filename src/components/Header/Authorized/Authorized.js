import React, {useState} from "react";

function Authorized() {

  const [openMenu, setOpenMenu] = useState(false);

  function hambHandler(e) {
    e.preventDefault();
    if (openMenu) {
      setOpenMenu(false);
    } else {
      setOpenMenu(true);
    }
  }

  return (
    <div>
      <div className={`${openMenu && `header__overlay`}`}>
        <nav className={`header__nav ${openMenu && `header__nav_open`}`}>
          <div className="header__container">
            <ul className={`header__list ${openMenu && `header__list_open`}`}>
              <li className="header__list-element">
                <a href="/" className="header__button-main header__link_activ">Главная</a>
              </li>
              <li className="header__list-element">
                <a href="/movies" className="header__button-film header__link_activ">Фильмы</a>
              </li>
              <li className="header__list-element">
                <a href="/saved-movies" className="header__button-save-film header__link_activ">Сохранённые фильмы</a>
              </li>
            </ul>
          </div>
          <a href="/profile" className="header__button-account header__link_activ">
            Аккаунт
            <div className="header__icon"/>
          </a>
        </nav>
      </div>
      <div>
        <nav className="navbar">
          <div className="navbar__container">
            <div className={`navbar__hamb ${openMenu && `navbar__hamb_active`}`} onClick={hambHandler}>
              <span className="navbar__bar"/>
              <span className="navbar__bar"/>
              <span className="navbar__bar"/>
            </div>
            <div className="navbar__menu">
              <a href="/movies" className="navbar__button-film">Фильмы</a>
              <a href="/saved-movies" className="navbar__button-save-film">Сохранённые фильмы</a>
              <a href="/profile" className="navbar__button-account">
                Аккаунт
                <div className="header__icon"/>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )

}

export default Authorized;