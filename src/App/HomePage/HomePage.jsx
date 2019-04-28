import React from "react";
import { connect } from "react-redux";

import "./HomePage.scss";
import Header from "../Header/Header";
import SearchBar from "./SearchBar/SearchBar";
import EmployeeList from "./EmployeeList/EmployeeList";
import { createActionOpenEmployeeTab } from "store/actions";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPhrase: ""
    };
  }

  setSearchPhrase = searchPhrase => {
    this.setState({ searchPhrase });
  };

  getFilteredEmployees = () => {
    const searchPhrase = this.state.searchPhrase.trim().toLowerCase();
    if (searchPhrase) {
      return this.props.employees.filter(employee =>
        `${employee.firstName.toLowerCase()} ${employee.lastName.toLowerCase()}`.includes(
          searchPhrase
        )
      );
    }
    return this.props.employees;
  };

  render() {
    const { openEmployeeTab } = this.props;
    return (
      <div className="home-page">
        <Header title="Employee Directory" />
        <SearchBar placeholder="Search..." onInput={this.setSearchPhrase} />
        <EmployeeList
          employees={this.getFilteredEmployees()}
          onEmployeeClick={openEmployeeTab}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  employees: state.employees
});

const mapDispatchToProps = dispatch => ({
  openEmployeeTab: idOfEmployee =>
    dispatch(createActionOpenEmployeeTab(idOfEmployee))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
