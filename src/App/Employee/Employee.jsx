import React from "react";

import "./Employee.scss";
import EditableTitle from "./EditableTitle/EditableTitle";

export default class Employee extends React.Component {
  render() {
    const {
      id,
      iconPath,
      iconSize,
      firstName,
      lastName,
      title,
      onTitleUpdate
    } = this.props;
    return (
      <div className="employee">
        <img
          src={iconPath}
          className={"employee-icon employee-icon-" + iconSize}
          alt="icon"
        />
        <div className="employee-info">
          <div className="employee-fullname">
            {firstName} {lastName}
          </div>
          {onTitleUpdate ? (
            <EditableTitle
              title={title}
              onTitleUpdate={onTitleUpdate}
              key={id}
            />
          ) : (
            <div className="employee-title">{title}</div>
          )}
        </div>
      </div>
    );
  }
}
