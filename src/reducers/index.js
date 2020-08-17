import { combineReducers } from "redux";

const intialDetails = {
  firstName: "",
  lastName: "",
};

const formReducer = (formDetails = intialDetails, action) => {
  return formDetails;
};

export default combineReducers({ form: formReducer });
