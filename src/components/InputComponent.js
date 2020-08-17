import React from "react";

export default function InputComponent({ input, meta }) {
  // console.log(meta); // has error property
  return (
    <>
      <input {...input} />
    </>
  );
}
