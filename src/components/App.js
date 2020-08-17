import React, { useState } from "react";
import { Field, reduxForm, formValues } from "redux-form";
import Profile from "./Profile";
import InputComponent from "./InputComponent";
function App(props) {
  // console.log(props); // many functions and values
  // handleSubmit also in props
  const { handleSubmit, valid } = props;
  // console.log(String(handleSubmit));
  const [showProfile, setShowProfile] = useState(false);
  return (
    <div className="App">
      <h1>Redux-Form</h1>
      <form
        onSubmit={handleSubmit(formValues => {
          // console.log(formValues);  {firstName: "vikram", lastName: "bedi"}
          setShowProfile(true);
        })}
      >
        <label>First Name: </label>
        <Field type="text" name="firstName" component={InputComponent} />
        <br />
        <label>Last Name: </label>
        <Field type="text" name="lastName" component={InputComponent} />
        <br />
        <button type="submit" disabled={!valid}>
          Submit it
        </button>
        <br />
      </form>
      {showProfile && <Profile />}
    </div>
  );
}

const validate = formValues => {
  const errors = {};
  if (!formValues.firstName) {
    errors.firstName = "Please provide your first name";
  }
  if (!formValues.lastName) {
    errors.lastName = "Please provide your last name";
  }

  return errors;
};

// reduxForm similar to connect
export default reduxForm({
  form: "myForm", // unique name
  validate
})(App);
