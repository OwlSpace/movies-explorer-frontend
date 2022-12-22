import React, {useState} from "react";

function Authorized() {

  const [openMenu, setOpenMenu] = useState(false);
  const authorizedHeaderMenu = `authorized-header__menu ${openMenu && `authorized-header__menu_open`}`;
  const authorizedHeaderList = `authorized-header__list ${openMenu && `authorized-header__list_open`}`;

  function hambHandler(e) {
    e.preventDefault();
    if (openMenu) {
      setOpenMenu(false);
    } else {
      setOpenMenu(true);
    }
  }

  return (
    <div className="authorized-header">
      <div className={`authorized-header__hamb ${openMenu && `authorized-header__hamb_active`}`} onClick={hambHandler}>
        <span className="authorized-header__bar"/>
        <span className="authorized-header__bar"/>
        <span className="authorized-header__bar"/>
      </div>
      <nav className="authorized-header__navigation">
        <a href="/movies" className="authorized-header__link">Фильмы</a>
        <a href="/saved-movies" className="authorized-header__link">Сохранённые фильмы</a>
        <a href="/profile" className="authorized-header__link">
          Аккаунт
          <div className="authorized-header__icon"/>
        </a>
      </nav>
      <div className={`${openMenu && `authorized-header__overlay`}`}>
        <nav className={authorizedHeaderMenu}>
          <nav className={authorizedHeaderList}>
            <a href="/" className="authorized-header__list-link">Главная</a>
            <a href="/movies" className="authorized-header__list-link">Фильмы</a>
            <a href="/saved-movies" className="authorized-header__list-link">Сохранённые фильмы</a>
          </nav>
          <a href="/profile" className="authorized-header__list-link authorized-header__list-link_account">
            Аккаунт
            <div className="authorized-header__icon"/>
          </a>
        </nav>
      </div>
    </div>
  )

}

export default Authorized;