import React from "react";

import "./EmployeeCardItem.scss";

const arrowIconPath = process.env.PUBLIC_URL + "/assets/arrow-to-right.png";

export default class EmployeeCardItem extends React.Component {
  render() {
    const { header, info } = this.props;
    return (
      <div className="employee-card-item">
        <div className="employee-card-item-body">
          <div className="employee-card-item-body-header">{header}</div>
          <div className="employee-card-item-body-info">{info}</div>
        </div>
        <img
          src={arrowIconPath}
          className="employee-card-item-arrow"
          alt="Go"
        />
      </div>
    );
  }
}
