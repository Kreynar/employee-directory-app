import React from "react";

export default class EmployeeCardItem extends React.Component {
  render() {
    const { header, info } = this.props;
    return (
      <div className="employee-card-item">
        <div className="employee-card-item-header">{header}</div>
        <div className="employee-card-item-info">{info}</div>
      </div>
    );
  }
}
