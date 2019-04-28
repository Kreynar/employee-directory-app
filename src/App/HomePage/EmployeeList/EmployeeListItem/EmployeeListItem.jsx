import React from "react";

import "./EmployeeListItem.scss";
import Employee from "App/Employee/Employee";

export default class EmployeeListItem extends React.Component {
  render() {
    const { onClick, iconPath, firstName, lastName, title } = this.props;
    return (
      <div onClick={onClick} className="employee-list-item">
        <Employee
          iconPath={iconPath}
          iconSize="small"
          firstName={firstName}
          lastName={lastName}
          title={title}
        />
      </div>
    );
  }
}
