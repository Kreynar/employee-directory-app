import React from "react";

import "./EmployeeListItem.scss";

export default class EmployeeListItem extends React.Component {
  render() {
    const { onClick, iconPath, firstName, lastName, title } = this.props;
    return (
      <div onClick={onClick} className="employee-list-item">
        <img src={iconPath} alt="icon" />
        <div className="employee-list-item-info">
          <div className="employee-list-item-fullname">
            {firstName} {lastName}
          </div>
          <div className="employee-list-item-title">{title}</div>
        </div>
      </div>
    );
  }
}
