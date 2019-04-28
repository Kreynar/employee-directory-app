import React from "react";
import { connect } from "react-redux";

import "./EmployeeCard.scss";
import EmployeeCardItem from "./EmployeeCardItem/EmployeeCardItem";
import Employee from "App/Employee/Employee";
import { createActionChangeEmployeeTitle } from "store/actions";

const iconsPath = process.env.PUBLIC_URL + "/assets/";

class EmployeeCard extends React.Component {
  render() {
    const { employee, changeEmployeeTitle } = this.props;
    return (
      <div className="employee-card">
        <div className="employee-card-header">
          <Employee
            iconPath={iconsPath + employee.pic}
            iconSize="big"
            id={employee.id}
            firstName={employee.firstName}
            lastName={employee.lastName}
            title={employee.title}
            onTitleUpdate={title => changeEmployeeTitle(employee.id, title)}
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

const mapDispatchToProps = dispatch => ({
  changeEmployeeTitle: (id, title) =>
    dispatch(createActionChangeEmployeeTitle(id, title))
});

export default connect(
  null,
  mapDispatchToProps
)(EmployeeCard);
