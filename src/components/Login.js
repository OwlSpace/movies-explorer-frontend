import React from "react";
import logo from "../images/logo.svg";
import useInput from "../utils/Validation";


function Login({onLogin, textError}) {

  const email = useInput('', {isEmpty: true, isEmail: true});
  const password = useInput('', {isEmpty: true, isPassword: true});

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(email.value, password.value);
  }


  return (
    <form className="form" onSubmit={handleSubmit}>
      <a href='/'><img src={logo} alt="логотип" className="form__logo"/></a>
      <h2 className="form__title">Рады видеть!</h2>
      <label>
        <p className="form__input-text">E-mail</p>
        <input
          onChange={e => email.onChange(e)}
          onBlur={e => email.onBlur(e)}
          className="form__input"
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
          value={password.value}
          type="password"
        />
        {(password.isDerty && password.passwordError) && <p className="form__error">{password.mesError}</p>}
      </label>
      <button disabled={!email.inputValid || !password.inputValid} className="form__button form__button-indent">
        {textError ? <p className="form__text-error">{textError}</p> : ''}
        Войти
      </button>
      <p className="form__text">
        Ещё не зарегистрированы?
        <a className="form__link" href='/signup'>Регистрация</a>
      </p>
    </form>
  )
}

export default Login;