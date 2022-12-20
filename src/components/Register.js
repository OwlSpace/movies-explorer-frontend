import React from "react";
import logo from "../images/logo.svg";

function Register() {

  return(
    <form className="form">
      <img className="form__logo" src={logo} alt="логотип"/>
      <h2 className="form__title">Добро пожаловать!</h2>
      <label>
        <p className="form__input-text">Имя</p>
        <input
          className="form__input"
          value="Кристина"
          minLength="2"
          maxLength="32"
        />
        <p className="form__error">Неккоректно имя</p>
      </label>
      <label>
        <p className="form__input-text">E-mail</p>
        <input
          className="form__input"
          type="email"
          value="kris@y.ru"
          minLength="2"
          maxLength="32"
        />
        <p className="form__error">Неккоректен адресс почты</p>
      </label>
      <label>
        <p className="form__input-text">Пароль</p>
        <input
          className="form__input form__input-error"
          value="1234"
          type="password"
        />
        <p className="form__error form__error_activ">Что-то не так...</p>
      </label>
      <button className="form__button">Зарегистрироваться</button>
      <p className="form__text">
        Уже зарегистрированы?
        <a className="form__link" href='/signin'> Войти</a>
      </p>
    </form>
  )

}

export default Register;