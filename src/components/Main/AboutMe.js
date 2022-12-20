import React from "react";
import Portfolio from "./Portfolio";
import fotoProfel from "../../images/photo-my-profil.jpg"

function AboutMe() {
  return (
    <div className="about-me">
      <h2 className="about-me__chapter">Студент</h2>
      <div className="about-me__container">
      <div className="about-me__my-info">
        <h3 className="about-me__title">Кристина</h3>
        <h4 className="about-me__subtitle">Фронтенд-разработчик, 26 лет</h4>
        <p className="about-me__description">Я родилась на дальнем востоке, закончила НИУБелГУ факультет информационных
          технологий.Я люблю музыку, творческие хобби и кроликов. </p>
        <a href="https://github.com/OwlSpace" target="_blank" className="about-me__link">Github</a>
      </div>
      <img src={fotoProfel} alt='Фото профиля' className="about-me__pfoto-profil"/>
      </div>
      <Portfolio />
    </div>
  )
}

export default AboutMe;