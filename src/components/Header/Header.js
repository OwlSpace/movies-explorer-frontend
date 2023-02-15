import React from "react";
import Authorized from "./Authorized/Authorized";
import NotAuthorized from "./NotAuthorized/NotAuthorized";

function Header({loggedIn}) {

  return (
    <header className={`header ${loggedIn && `header_color`}`}>
      <a href="/" className="header__logo" />
      {
        loggedIn ? (
            <Authorized/>
          )
          : (
            <NotAuthorized/>
          )
      }
    </header>
  )

}

export default Header;