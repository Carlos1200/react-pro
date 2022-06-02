import { Formik, Form } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";
import { MyTextInput } from "../components";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          passwordConfirm: "",
        }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required").min(2, "Min 2 characters"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Required"),
          passwordConfirm: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Required"),
        })}
      >
        {() => (
          <Form>
            <MyTextInput name="name" label="Name" />
            <MyTextInput name="email" label="Email Address" />
            <MyTextInput name="password" label="Passsword" type="password" />
            <MyTextInput
              name="passwordConfirm"
              label="Repeat Password"
              type="password"
            />
            <button type="submit">Create</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
