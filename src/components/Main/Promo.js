import React from "react";
import landingLogo from "../../images/landing-logo.svg";

function Promo() {

  return (
    <div className="promo">
      <img src={landingLogo} alt='логотип главной страницы' className="promo__logo"/>
      <div className="promo__container">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <p className="promo__description">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <a href="#about-project" className="promo__link-more">Узнать больше</a>
      </div>
    </div>
  )
}

export default Promo;