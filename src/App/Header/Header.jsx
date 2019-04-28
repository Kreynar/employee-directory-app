import React from "react";

import "./Header.scss";

const Header = ({ title }) => (
  <div className="header">
    <span className="header-title">{title}</span>
  </div>
);

export default Header;
