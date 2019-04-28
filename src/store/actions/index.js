export const OPEN_EMPLOYEE_TAB = "OPEN_EMPLOYEE_TAB";
export const CHANGE_TITLE = "CHANGE_TITLE";

export const createActionOpenEmployeeTab = idOfEmployee => ({
  type: OPEN_EMPLOYEE_TAB,
  payload: idOfEmployee
});

export const createActionChangeTitle = title => ({
  type: CHANGE_TITLE,
  payload: title
});
