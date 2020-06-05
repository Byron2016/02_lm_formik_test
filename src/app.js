import React from "react";
import { withFormik, Field } from "formik";

function MyForm(props) {
  const { isSubmitting, isValid, handleSubmit, errors, touched } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        Email:
        <Field name="email" type="email" className="input" />
        {errors.email && touched.email && (
          <div className="error">{errors.email}</div>
        )}
      </div>

      <div className="row">
        Password:
        <Field name="password" type="password" className="input" />
        {errors.password && touched.password && (
          <div className="error">{errors.password}</div>
        )}
      </div>

      <div className="row">
        <button
          type="submit"
          className={`submit ${isSubmitting || !isValid ? "disabled" : ""}`}
          disabled={isSubmitting || !isValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default withFormik({
  validate(values) {
    const errors = {};

    if (!values.password) {
      errors.password = "Passwrod is required";
    } else if (values.password.length < 8) {
      errors.password = "Passwrod must be at least 8 caracters";
    }

    return errors;
  },

  handleSubmit(values, formikBag) {
    console.log(values);

    formikBag.setSubmitting(false);
  },
})(MyForm);
