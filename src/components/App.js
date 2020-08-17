import React from "react";
import { Field, reduxForm } from "redux-form";
function App(props) {
  return (
    <div className="App">
      <h1>Redux-Form</h1>
      <label>First Name: </label>
      <Field type="text" name="firstName" component="input" />
      <br />
      <label>Last Name: </label>
      <Field type="text" name="lastName" component="input" />
    </div>
  );
}

// reduxForm similar to connect
export default reduxForm({
  form: "myForm" // unique name
})(App);
