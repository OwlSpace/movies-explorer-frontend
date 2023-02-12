import React from "react";
import logo from "../images/logo.svg";
import useInput from "../utils/Validation";

function Register({onRegist, textError}) {

  const name = useInput('', {isEmpty: true, isName: true });
  const email = useInput('', {isEmpty: true, isEmail: true});
  const password = useInput('', {isEmpty: true, isPassword: true});


  function handleSubmit(e) {
    e.preventDefault();
    onRegist(name.value, email.value, password.value);
  }


  return (
    <form className="form" onSubmit={handleSubmit}>
      <a href="/"><img className="form__logo" src={logo} alt="логотип"/></a>
      <h2 className="form__title">Добро пожаловать!</h2>
      <label>
        <p className="form__input-text">Имя</p>
        <input
          onChange={e => name.onChange(e)}
          onBlur={e => name.onBlur(e)}
          className="form__input"
          minLength="2"
          maxLength="32"
          value={name.value}
        />
        {(name.isDerty && name.nameError) && <p className="form__error">{name.mesError}</p>}
      </label>
      <label>
        <p className="form__input-text">E-mail</p>
        <input
          onChange={e => email.onChange(e)}
          onBlur={e => email.onBlur(e)}
          className="form__input"
          minLength="2"
          maxLength="32"
          value={email.value}
        />
        {(email.isDerty && email.emailError) && <p className="form__error">{email.mesError}</p>}
      </label>
      <label>
        <p className="form__input-text">Пароль</p>
        <input
          onChange={e => password.onChange(e)}
          onBlur={e => password.onBlur(e)}
          className="form__input"
          type="password"
          value={password.value}
        />
        {(password.isDerty && password.passwordError) && <p className="form__error">{password.mesError}</p>}
      </label>

      <button className="form__button" disabled={!name.inputValid || !email.inputValid || !password.inputValid}>
        {textError ? <p className="form__text-error">{textError}</p> : ''}
        Зарегистрироваться
      </button>
      <p className="form__text">
        Уже зарегистрированы?
        <a className="form__link" href='/signin'> Войти</a>
      </p>
    </form>
  )

}

export default Register;