import React from "react";

import "./EmployeePage.scss";
import Header from "../Header/Header";
import EmployeeCard from "./EmployeeCard/EmployeeCard";

export default class EmployeePage extends React.Component {
  render() {
    const { employee, onCloseClick } = this.props;
    return (
      <div className="employee-page">
        <div className="employee-page-header">
          <Header title="Employee" onCloseClick={onCloseClick} />
        </div>
        <EmployeeCard employee={employee} />
      </div>
    );
  }
}
