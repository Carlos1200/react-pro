import { Formik, Form } from "formik";
import { MySelect, MyTextInput } from "../components";
import formJson from "../data/custom-form.json";
import * as Yup from "yup";

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if (!input.validation) continue;
  let schema = Yup.string();
  for (const rule of input.validation) {
    if (rule.type === "required") {
      schema = schema.required("Required");
    }

    if (rule.type === "minLength") {
      schema = schema.min(
        (rule as any).value || 1,
        `Must be at least ${(rule as any).value} characters`
      );
    }

    if (rule.type === "email") {
      schema = schema.email("Invalid email address");
    }

    requiredFields[input.name] = schema;
  }
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (type === "text" || type === "email" || type === "password") {
                return (
                  <MyTextInput
                    key={name}
                    type={type as any}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                  />
                );
              } else if (type === "select") {
                return (
                  <MySelect key={name} name={name} label={label}>
                    <option value="">Select An Option</option>
                    {options?.map(({ id, label }) => (
                      <option key={id} value={id}>
                        {label}
                      </option>
                    ))}
                  </MySelect>
                );
              }

              return <span>Tipo no soportado</span>;
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
