import React from "react";

import "./Header.scss";
const closeIconPath = process.env.PUBLIC_URL + "/assets/x.png";

const Header = ({ title, onCloseClick = null }) => (
  <div className="header">
    <span className="header-title">{title}</span>
    {onCloseClick ? (
      <img src={closeIconPath} onClick={onCloseClick} alt="close" />
    ) : null}
  </div>
);

export default Header;
