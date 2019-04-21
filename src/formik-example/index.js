import React from "react";
import { render } from "react-dom";
import { Formik } from "formik";
import "./style.scss";

class App extends React.Component {
  render() {
    return (
      <Formik
        // Sets up our default value
        initialValues={{ name: "", email: "" }}
        // Validate
        validate={values => {
          const errors = {};

          if (values.name == "") errors.name = "Name required";
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "You must supply a valid email address";
          }
          if (values.email == "") errors.email = "Email field required";

          return errors;
        }}
        onSubmit={(values, ops) => {
          console.log("Submitted values ", values);
          console.log("Other options ", ops);
        }}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          handleBlur,
          errors,
          touched,
          ...rest
        }) => (
          <div className="sample-form">
            <h1>Sample App</h1>
            {console.log(rest)}
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && (
                  <div className="text__error">{errors.name}</div>
                )}
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && (
                  <div className="text__error">{errors.email}</div>
                )}
              </div>
              <button type="submit" disabled={!rest.isValid}>
                Submit
              </button>
            </form>
          </div>
        )}
      </Formik>
    );
  }
}

render(<App />, document.getElementById("app"));
