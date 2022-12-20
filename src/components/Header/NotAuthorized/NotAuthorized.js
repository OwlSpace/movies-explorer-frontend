import React from "react";

function NotAuthorized() {

  return (
    <nav className="navbar__menu-not-autorized">
      <a href="/signup" className="header__link-register" >Регистрация</a>
      <a href="/signin" className="header__link-login">Войти</a>
    </nav>
  )

}

export default NotAuthorized;