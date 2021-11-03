import axios from "axios";
import "regenerator-runtime";

const SET_MONTH = "SET_MONTH";

export const _setMonth = (month) => {
  return {
    type: SET_MONTH,
    month,
  };
};

export default function singleMonthReducer(state = "", action) {
  switch (action.type) {
    case SET_MONTH:
      return action.month;
    default:
      return state;
  }
}
