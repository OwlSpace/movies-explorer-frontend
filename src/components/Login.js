import React from "react";
import logo from "../images/logo.svg";

function Login() {

  return (
    <form className="form">
      <img src={logo} alt="логотип" className="form__logo"/>
      <h2 className="form__title">Рады видеть!</h2>
      <label>
        <p className="form__input-text">E-mail</p>
        <input
          className="form__input"
          minLength="2"
          maxLength="32"
        />
        <p className="form__error">Что-то не так...</p>
      </label>
      <label>
        <p className="form__input-text">Пароль</p>
        <input
          className="form__input"
        />
        <p className="form__error">Что-то не так...</p>
      </label>
      <button className="form__button form__button-indent">Войти</button>
      <p className="form__text">
        Ещё не зарегистрированы?
        <a className="form__link" href='/signup'>Регистрация</a>
      </p>
    </form>
  )
}

export default Login;