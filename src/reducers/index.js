import { combineReducers } from "redux";
import { SAVE_FORM } from "../actions/form-action";

const intialDetails = {
  firstName: "",
  lastName: "",
};

const formReducer = (formDetails = intialDetails, action) => {
  if (action.type === SAVE_FORM) {
    return action.payload;
  }
  return formDetails;
};

export default combineReducers({ form: formReducer });
