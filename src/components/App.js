import React, { useState } from "react";
import { connect } from "react-redux";
import { saveFormDetails } from "../actions/form-action";
function App(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    <div className="App">
      <h1>Redux-Form</h1>
      First Name:
      <input
        type="text"
        name="firstName"
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />
      <br />
      Last Name:
      <input
        type="text"
        name="lastName"
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
      <br />
      <button onClick={() => props.submitForm(firstName, lastName)}>
        Save
      </button>
      <br />
      <br />
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
    </div>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    submitForm(firstName, lastName) {
      dispatch(saveFormDetails(firstName, lastName));
    }
  };
};

export default connect(null, mapDispatchToProps)(App);
