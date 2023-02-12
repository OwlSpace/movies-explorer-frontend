import React, {useEffect, useState} from "react";
import useInput from "../utils/Validation";
import mainApi from "../utils/MainApi";
import {updateUserInfoError, updateUserInfoGut} from "../utils/Constans";

function Profile({userInfo, out, popup}) {

  const [disabled, setDisabled] = useState(true);
  const [nameLast, setNameLast] = useState(userInfo.name);
  const [emailLast, setEmailLast] = useState(userInfo.email);

  const name = useInput(nameLast, {isEmpty: true, isName: true});
  const email = useInput(emailLast, {isEmpty: true, isEmail: true});

  useEffect(() => {
    if (nameLast === name.value && emailLast === email.value) {
      setDisabled(true);
    } else {
      if (!name.inputValid || !email.inputValid) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    }
  }, [name.inputValid, email.inputValid, name.value, email.value])

  function updateUserInformation(name, email) {
    mainApi.updateUserInfo({name, email})
      .then((user) => {
        setNameLast(user.name);
        setEmailLast(user.email);
        popup(updateUserInfoGut);
      })
      .catch(() => {
        popup(updateUserInfoError);
      })
  }

  function handelUpdateData(e) {
    e.preventDefault();
    updateUserInformation(name.value, email.value);
    setDisabled(true);
  }

  return (
    <form className="profile">
      <h2 className="profile__title">Привет, {nameLast}!</h2>
      <div className="profile__container">
        <p className="profile__name">Имя</p>
        <label>
          <input
            className="profile__input"
            minLength="2"
            maxLength="32"
            value={name.value}
            onChange={e => name.onChange(e)}
            onBlur={e => name.onBlur(e)}
          />
          {(name.isDerty && name.nameError) && <p className="form__error">{name.mesError}</p>}
        </label>
        <p className="profile__name">E-mail</p>
        <label>
          <input
            className="profile__input profile__input_border"
            minLength="2"
            maxLength="32"
            value={email.value}
            onChange={e => email.onChange(e)}
            onBlur={e => email.onBlur(e)}
          />
          {(email.isDerty && email.emailError) && <p className="form__error">{email.mesError}</p>}
        </label>
      </div>
      <button className="profile__edit" disabled={disabled} onClick={handelUpdateData}>Редактировать</button>
      <button className="profile__exit" type="button" onClick={out}>Выйти из аккаунта</button>
    </form>
  )
}

export default Profile;