import React from "react";
import logo from "../../images/logo.svg"
import Authorized from "./Authorized/Authorized";
import NotAuthorized from "./NotAuthorized/NotAuthorized";

function Header({pathName}) {

  const isLogin = pathName !== '/';

  return (
    <header className={`header ${isLogin && `header_color`}`}>
      <img src={logo} alt='логотип' className='header__logo'/>
      {
        isLogin ? (
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