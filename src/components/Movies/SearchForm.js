import React from "react";
import Preloader from "./Preloader";

function SearchForm() {

  return (
    <section>
      <form className="search-form">
        <h2 className="search-form__fields">
          <label>
            <input
              required
              placeholder="Фильм"
              className="search-form__name-film"
            />
          </label>
          <button className="search-form__search-button"/>
        </h2>
        <div className="line"/>
        <Preloader/>
      </form>
    </section>
  )

}

export default SearchForm;