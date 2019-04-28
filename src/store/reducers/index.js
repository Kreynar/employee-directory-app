import { OPEN_EMPLOYEE_TAB, CHANGE_TITLE } from "../actions";
import { initialEmployees } from "./initialEmployees";

const initialState = {
  employees: initialEmployees,
  idOfEmployeeInPage1: null,
  idOfEmployeeInPage2: null,
  lastOpenedPage: null
};

const PAGE_1 = "PAGE_1";
const PAGE_2 = "PAGE_2";

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case OPEN_EMPLOYEE_TAB:
      let { idOfEmployeeInPage1, idOfEmployeeInPage2, lastOpenedPage } = state;
      if (payload === idOfEmployeeInPage1 || payload === idOfEmployeeInPage2) {
      } else if (lastOpenedPage === null) {
        idOfEmployeeInPage1 = payload;
        lastOpenedPage = PAGE_1;
      } else if (lastOpenedPage === PAGE_1) {
        idOfEmployeeInPage2 = payload;
        lastOpenedPage = PAGE_2;
      } else {
        idOfEmployeeInPage1 = payload;
        lastOpenedPage = PAGE_1;
      }
      return {
        ...state,
        idOfEmployeeInPage1,
        idOfEmployeeInPage2,
        lastOpenedPage
      };
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
