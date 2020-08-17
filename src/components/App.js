import React from "react";
import { Field, reduxForm, formValues } from "redux-form";
function App(props) {
  // console.log(props); // many functions and values
  // handleSubmit also in props
  const { handleSubmit } = props;
  // console.log(String(handleSubmit));
  return (
    <div className="App">
      <h1>Redux-Form</h1>
      <form
        onSubmit={handleSubmit(formValues => {
          // console.log(formValues);  {firstName: "vikram", lastName: "bedi"}
        })}
      >
        <label>First Name: </label>
        <Field type="text" name="firstName" component="input" />
        <br />
        <label>Last Name: </label>
        <Field type="text" name="lastName" component="input" />
        <br />
        <button type="submit">Submit it</button>
      </form>
    </div>
  );
}

// reduxForm similar to connect
export default reduxForm({
  form: "myForm" // unique name
})(App);
