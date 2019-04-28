import React from "react";

import "./Employee.scss";

export default class Employee extends React.Component {
  render() {
    const { iconPath, iconSize, firstName, lastName, title } = this.props;
    return (
      <div className="employee">
        <img
          src={iconPath}
          className={"employee-icon-" + iconSize}
          alt="icon"
        />
        <div className="employee-info">
          <div className="employee-fullname">
            {firstName} {lastName}
          </div>
          <div className="employee-title">{title}</div>
        </div>
      </div>
    );
  }
}
