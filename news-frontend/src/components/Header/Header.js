import React from "react";

import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({ headerClassName, onAuthorizeClick, loggedIn, logOut }) {
  return (
    <div className={headerClassName}>
      <h1 className="header__title">NewsExplorer</h1>
      <Navigation onAuthorizeClick={onAuthorizeClick} loggedIn={loggedIn} logOut={logOut} />
    </div>
  );
}

export default Header;
