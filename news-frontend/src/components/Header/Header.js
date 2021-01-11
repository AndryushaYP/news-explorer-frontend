import React from "react";

import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({ headerClassName }) {
  const loggedIn = true;
  return (
    <div className={headerClassName}>
      <h1 className="header__title">NewsExplorer</h1>
      <Navigation loggedIn={loggedIn} />
    </div>
  );
}

export default Header;
