import {
  OPEN_EMPLOYEE_TAB,
  CLOSE_EMPLOYEE_TAB,
  CHANGE_TITLE
} from "../actions";
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
  const { idOfEmployeeInPage1, idOfEmployeeInPage2, lastOpenedPage } = state;
  let idOfEmployeeInPage1_, idOfEmployeeInPage2_, lastOpenedPage_;
  switch (type) {
    case OPEN_EMPLOYEE_TAB:
      idOfEmployeeInPage1_ = idOfEmployeeInPage1;
      idOfEmployeeInPage2_ = idOfEmployeeInPage2;
      lastOpenedPage_ = lastOpenedPage;
      if (payload === idOfEmployeeInPage1 || payload === idOfEmployeeInPage2) {
      } else if (lastOpenedPage === null) {
        idOfEmployeeInPage1_ = payload;
        lastOpenedPage_ = PAGE_1;
      } else if (lastOpenedPage === PAGE_1) {
        idOfEmployeeInPage2_ = payload;
        lastOpenedPage_ = PAGE_2;
      } else {
        idOfEmployeeInPage1_ = payload;
        lastOpenedPage_ = PAGE_1;
      }
      return {
        ...state,
        idOfEmployeeInPage1: idOfEmployeeInPage1_,
        idOfEmployeeInPage2: idOfEmployeeInPage2_,
        lastOpenedPage: lastOpenedPage_
      };
    case CLOSE_EMPLOYEE_TAB:
      idOfEmployeeInPage1_ = idOfEmployeeInPage1;
      idOfEmployeeInPage2_ = idOfEmployeeInPage2;
      payload === idOfEmployeeInPage1
        ? (idOfEmployeeInPage1_ = null)
        : (idOfEmployeeInPage2_ = null);
      if (idOfEmployeeInPage1_ !== null) lastOpenedPage_ = PAGE_1;
      else if (idOfEmployeeInPage2_ !== null) lastOpenedPage_ = PAGE_2;
      else lastOpenedPage_ = null;
      return {
        ...state,
        idOfEmployeeInPage1: idOfEmployeeInPage1_,
        idOfEmployeeInPage2: idOfEmployeeInPage2_,
        lastOpenedPage: lastOpenedPage_
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
