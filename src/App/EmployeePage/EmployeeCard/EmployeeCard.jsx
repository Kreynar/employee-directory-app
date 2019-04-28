import React from "react";

import "./EmployeeCard.scss";
import EmployeeCardItem from "./EmployeeCardItem/EmployeeCardItem";
import Employee from "App/Employee/Employee";

const iconsPath = process.env.PUBLIC_URL + "/assets/";

export default class EmployeeCard extends React.Component {
  render() {
    const { employee } = this.props;
    return (
      <div className="employee-card">
        <div className="employee-card-header">
          <Employee
            iconPath={iconsPath + employee.pic}
            iconSize="big"
            firstName={employee.firstName}
            lastName={employee.lastName}
            title={employee.title}
            isTitleE
          />
        </div>
        <EmployeeCardItem header="Call Office" info={employee.officePhone} />
        <EmployeeCardItem header="Call Mobile" info={employee.mobilePhone} />
        <EmployeeCardItem header="SMS" info={employee.mobilePhone} />
        <EmployeeCardItem header="Email" info={employee.email} />
      </div>
    );
  }
}
