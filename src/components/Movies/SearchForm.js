import React from "react";

function SearchForm({searchValue, setSearchValue, searchFilms, checkbox, setCheckbox, handelTumbler}) {

  function handleSearchFilm(e) {
    e.preventDefault();
    searchFilms(searchValue, checkbox);
  }

  function handleTumbler() {
    const switching = !checkbox;
    setCheckbox(switching);
    handelTumbler(switching);
  }


  return (
    <section>
      <form className="search-form" onSubmit={handleSearchFilm}>
        <h2 className="search-form__fields">
          <label>
            <input
              placeholder="Фильм"
              className="search-form__name-film"
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
            />
          </label>
          <button className="search-form__search-button"/>
        </h2>
        <div className="line"/>
        <div className="switch">
          <h2 className="switch__name">Короткометражки</h2>
          <input type="checkbox" className="switch__check" checked={checkbox} onChange={handleTumbler}/>
        </div>
      </form>
    </section>
  )

}

export default SearchForm;