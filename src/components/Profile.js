import React from "react";

function Profile() {

  return (
    <form className="profile">
      <h2 className="profile__title">Привет, Кристина!</h2>
      <div className="profile__container">
        <p className="profile__name">Имя</p>
        <label className="mod">
          <input
            className="profile__input"
            minLength="2"
            maxLength="32"
            value="Кристина"
          />
        </label>
        <p className="profile__name">E-mail</p>
        <label className="mod">
          <input
            className="profile__input profile__input_border"
            minLength="2"
            maxLength="32"
            value="Kris@ya.ru"
          />
        </label>
      </div>
      <button className="profile__edit">Редактировать</button>
      <button className="profile__exit">Выйти из аккаунта</button>
    </form>
  )
}

export default Profile;