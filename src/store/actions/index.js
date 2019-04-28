export const OPEN_EMPLOYEE_TAB = "OPEN_EMPLOYEE_TAB";
export const CLOSE_EMPLOYEE_TAB = "CLOSE_EMPLOYEE_TAB";
export const CHANGE_TITLE = "CHANGE_TITLE";

export const createActionOpenEmployeeTab = idOfEmployee => ({
  type: OPEN_EMPLOYEE_TAB,
  payload: idOfEmployee
});

export const createActionCloseEmployeeTab = idOfEmployee => ({
  type: CLOSE_EMPLOYEE_TAB,
  payload: idOfEmployee
});

export const createActionChangeEmployeeTitle = (id, title) => ({
  type: CHANGE_TITLE,
  payload: { id, title }
});
