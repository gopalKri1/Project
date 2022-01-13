import actions from "../constants";

export const addRow = (payload) => ({
  type: actions.ADD_ROW,
  payload
});

export const updaterow = (payload) => ({
    type: actions.UPDATE_ROW,
    payload
  });

  export const deleterow = (payload) => ({
    type: actions.DELETE_ROW
  });

