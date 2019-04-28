import React from "react";

import "./EmployeePage.scss";
import Header from "../Header/Header";
import EmployeeCardItem from "./EmployeeCardItem/EmployeeCardItem";

const iconsPath = process.env.PUBLIC_URL + "/assets";

export default class EmployeePage extends React.Component {
  render() {
    const { employee } = this.props;
    return (
      <div className="employee-page">
        <Header title="Employee" />
        <div className="employee-card">
          <div className="employee-card-header">
            <img src={iconsPath + employee.pic} alt="icon" />
            <span>{employee.name}</span>
            <span>{employee.title}</span>
          </div>
          <EmployeeCardItem header="Call Office" info={employee.officePhone} />
          <EmployeeCardItem header="Call Mobile" info={employee.mobilePhone} />
          <EmployeeCardItem header="SMS" info={employee.mobilePhone} />
          <EmployeeCardItem header="Email" info={employee.email} />
        </div>
      </div>
    );
  }
}
