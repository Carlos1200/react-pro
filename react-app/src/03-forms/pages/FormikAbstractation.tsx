import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyCheckbox, MySelect, MyTextInput } from "../components";

import "../styles/styles.css";

export const FormikAbstractation = () => {
  return (
    <div>
      <h1>Formik Abstractation</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log({ ...values });
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          terms: Yup.boolean().oneOf(
            [true],
            "You must accept the terms and conditions"
          ),
          jobType: Yup.string()
            .required("Required")
            .notOneOf(["it-junior"], "This option is not available"),
        })}
      >
        {() => (
          <Form>
            <MyTextInput
              label="First Name"
              name={"firstName"}
              placeholder="Enter your first name"
            />
            <MyTextInput
              label="Last Name"
              name={"lastName"}
              placeholder="Enter your last name"
            />
            <MyTextInput
              label="Email Address"
              name={"email"}
              type="email"
              placeholder="Enter your email address"
            />
            <MySelect label="Job Type" as="select" name="jobType">
              <option value="">Select a job type</option>
              <option value="designer">Designer</option>
              <option value="developer">Developer</option>
              <option value="it-junior">IT Junior</option>
              <option value="other">Other</option>
            </MySelect>
            <MyCheckbox label="Terms and conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};