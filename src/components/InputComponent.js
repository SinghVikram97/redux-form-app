import React from "react";

export default function InputComponent({ input, meta }) {
  // console.log(meta); // has error property
  const { error, touched } = meta;
  return (
    <>
      <input {...input} />
      {error && touched && <p>{error}</p>}
    </>
  );
}
