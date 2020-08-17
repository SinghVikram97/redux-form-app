import React from "react";
import { connect } from "react-redux";

const Profile = (props) => {
  const { firstName, lastName } = props.formData;
  return (
    <div>
      <h1>Profile</h1>
      <p>First Name: &nbsp; {firstName}</p>
      <p>Last Name: &nbsp; {lastName}</p>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    formData: state.form.myForm.values,
  };
};

export default connect(mapStateToProps)(Profile);
