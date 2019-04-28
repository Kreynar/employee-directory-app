import React from "react";

import EmployeeListItem from "./EmployeeListItem/EmployeeListItem";

const iconsPath = process.env.PUBLIC_URL + "/assets/";

export default class EmployeeList extends React.Component {
  render() {
    const { employees, onEmployeeClick } = this.props;
    return (
      <div>
        {employees.map(employee => (
          <EmployeeListItem
            onClick={() => onEmployeeClick(employee.id)}
            key={employee.id}
            iconPath={iconsPath + employee.pic}
            firstName={employee.firstName}
            lastName={employee.lastName}
            title={employee.title}
          />
        ))}
      </div>
    );
  }
}
