import { CHANGE_TITLE } from "../actions";
import { initialEmployees } from "./initialEmployees";

const initialState = {
  employees: initialEmployees,
  idOfEmployeeInPage1: null,
  idOfEmployeeInPage2: null
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case CHANGE_TITLE:
      const employees = state.employees.map(employee => {
        if (employee.id === payload.id) {
          return { ...employee, title: payload.title };
        }
        return employee;
      });
      return { ...state, employees };
    default:
      return state;
  }
}
