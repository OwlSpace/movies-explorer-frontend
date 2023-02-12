import React from "react";

const Popup = ({statePopup, closePopup, textError}) => {
  return (
    <section className={`popup ${statePopup && 'popup_open'}`}>
      <form className="popup__form">
        <button className="popup__button" type="button" onClick={closePopup}/>
        <p className="popup__text">{textError}</p>
      </form>
    </section>
  )
}

export default Popup;