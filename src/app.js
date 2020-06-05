import React from "react";
import { withFormik, Field, ErrorMessage, Form } from "formik";

function MyForm(props) {
  const { isSubmitting, isValid } = props;

  return (
    <Form>
      <div className="row">
        Email:
        <Field name="email" type="email" className="input" />
        <ErrorMessage name="email">
          {(message) => <div className="error">{message}</div>}
        </ErrorMessage>
      </div>

      <div className="row">
        Password:
        <Field name="password" type="password" className="input" />
        <ErrorMessage name="password">
          {(message) => <div className="error">{message}</div>}
        </ErrorMessage>
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
    </Form>
  );
}

export default withFormik({
  mapPropsToValues(props) {
    return {
      email: props.defaultEmail,
      password: "",
    };
  },

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
