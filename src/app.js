import React from "react";
import { withFormik } from "formik";

function MyForm(props) {
  const {
    handleSubmit,
    isSubmitting,
    handleChange,
    handleBlur,
    values,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        type="email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
      />
      <input
        name="password"
        type="password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
      />
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
}

export default withFormik({
  handleSubmit(values, formikBag) {
    console.log(values);

    formikBag.setSubmitting(false);
  },
})(MyForm);
