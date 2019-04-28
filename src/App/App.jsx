import React from "react";
import { connect } from "react-redux";

import "./App.scss";
import HomePage from "./HomePage/HomePage";
import EmployeePage from "./EmployeePage/EmployeePage";
import { createActionCloseEmployeeTab } from "store/actions";

const App = ({ employeeInPage1, employeeInPage2, closeEmployeeTab }) => (
  <div className="App">
    <HomePage />
    {employeeInPage1 ? (
      <EmployeePage
        employee={employeeInPage1}
        onCloseClick={() => closeEmployeeTab(employeeInPage1.id)}
      />
    ) : null}
    {employeeInPage2 ? (
      <EmployeePage
        employee={employeeInPage2}
        onCloseClick={() => closeEmployeeTab(employeeInPage2.id)}
      />
    ) : null}
  </div>
);

const mapStateToProps = state => ({
  employeeInPage1: state.employees.find(
    employee => employee.id === state.idOfEmployeeInPage1
  ),
  employeeInPage2: state.employees.find(
    employee => employee.id === state.idOfEmployeeInPage2
  )
});

const mapDispatchToProps = dispatch => ({
  closeEmployeeTab: idOfEmployee =>
    dispatch(createActionCloseEmployeeTab(idOfEmployee))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
