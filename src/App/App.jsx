import React from "react";
import { connect } from "react-redux";

import "./App.scss";
import HomePage from "./HomePage/HomePage";
import EmployeePage from "./EmployeePage/EmployeePage";

const App = ({ employeeInPage1, employeeInPage2 }) => (
  <div className="App">
    <HomePage />
    {employeeInPage1 ? <EmployeePage employee={employeeInPage1} /> : null}
    {employeeInPage2 ? <EmployeePage employee={employeeInPage2} /> : null}
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

export default connect(mapStateToProps)(App);
