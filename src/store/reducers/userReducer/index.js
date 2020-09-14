/* eslint-disable no-case-declarations */
import { CHANGE_STATUS_FETCHING, CHANGE_STATUS_FULFILLED, SET_USER_DATA, SET_USER_KCAL } from "../../types";

const initialState = {
  userData: {
    name: "",
    email: "",
    calculatorData: null,
    messageToSend:""
  },
  error: "",
  status: "FULFILLED",
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_STATUS_FETCHING:
      return {
        ...state,
        status: "FETCHING",
      };
    case CHANGE_STATUS_FULFILLED:
      return {
        ...state,
        status: "FULFILLED",
      };
      case SET_USER_KCAL:
        const newUserData = Object.assign({}, state.userData);
        newUserData.calculatorData = payload;
        return {
          ...state,
          userData: newUserData,
        };
    case SET_USER_DATA: 
      return {
        ...state,
        userData: {...state.userData, ...payload},
        error: "",
      };
    default:
      return state;
  }
};
