import React from "react";

function AboutProject() {

  return (
    <div className="about-project" id="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__container">
        <div className="about-project__info">
        <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
        <p className="about-project__description">Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__info">
        <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
        <p className="about-project__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.</p>
      </div>
      </div>
      <div className="about-project__container">
        <div className="about-project__time">1 неделя</div>
        <div className="about-project__time ">4 недели</div>
        <p className="about-project__technology">Front-end</p>
        <p className="about-project__technology">Back-end</p>
      </div>
    </div>
  )

}

export default AboutProject;
