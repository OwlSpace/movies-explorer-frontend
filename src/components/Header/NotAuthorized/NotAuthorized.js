import React from "react";

function NotAuthorized() {

  return (
    <div className="not-autorized">
      <nav className="not-autorized__menu">
        <a href="/signup" className="not-autorized__link-register">Регистрация</a>
        <a href="/signin" className="not-autorized__link-login">Войти</a>
      </nav>
    </div>
  )

}

export default NotAuthorized;