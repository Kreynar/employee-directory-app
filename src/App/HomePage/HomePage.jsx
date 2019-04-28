import React from "react";
import { connect } from "react-redux";

import "./HomePage.scss";
import Header from "../Header/Header";
import SearchBar from "./SearchBar/SearchBar";
import EmployeeList from "./EmployeeList/EmployeeList";

class HomePage extends React.Component {
  render() {
    const { employees, onEmployeeClick } = this.props;
    return (
      <div className="home-page">
        <Header title="Employee Directory" />
        <SearchBar
          placeholder="Search for employee..."
          onInput={this.filterEmployees}
        />
        <EmployeeList employees={employees} onEmployeeClick={onEmployeeClick} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  employees: state.employees
});

export default connect(mapStateToProps)(HomePage);
