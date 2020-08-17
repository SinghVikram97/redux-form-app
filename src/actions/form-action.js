export const SAVE_FORM = "SAVE_FORM";

export const saveFormDetails = (firstName, lastName) => {
  return {
    type: SAVE_FORM,
    payload: {
      firstName,
      lastName,
    },
  };
};
