import actions from "../constants";

const initialvalues = {
  data: [
    { account_no: 678493647578, reffer_id: 8738738 },
    { account_no: 904923421346, reffer_id: 8738738 },
    { account_no: 904923478392, reffer_id: 8738738 },
    { account_no: 904923463478, reffer_id: 8738738 },
  ],
};

export const listReducer = (state = initialvalues, { type, payload }) => {
  const { ADD_ROW, DELETE_ROW, UPDATE_ROW }= actions;

  switch (type) {
    case ADD_ROW:
      return {
        ...state,
        data: [...state.data, {}],
      };
    case DELETE_ROW:
      const newData = [...state.data];
      newData.splice(payload, 1);

      return {
        ...state,
        data: newData,
      };
    case UPDATE_ROW:
      return {
        ...state,
        data: state.data.map((content, i) =>
          i === payload.rowIndex
            ? { ...content, [payload.columnId]: payload.value }
            : content
        ),
      };
    default:
      return state;
  }
};
