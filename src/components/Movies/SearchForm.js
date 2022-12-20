import React from "react";
import Preloader from "./Preloader";

function SearchForm() {

  return (
    <div>
      <form className="search-form">
        <label className="search-form__fields">
          <input placeholder="Фильм" className="search-form__name-film"/>
          <button className="search-form__search-button"/>
        </label>
        <div className="line"/>
        <Preloader/>
      </form>
    </div>
  )

}

export default SearchForm;