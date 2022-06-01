import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  [key: string]: any;
}

export const MyCheckbox = ({ label, ...props }: Props) => {
  const [field] = useField({ ...props, type: "checkbox" });

  return (
    <>
      <label>
        <input type="checkbox" {...props} {...field} />
        {label}
      </label>
      <ErrorMessage name={props.name} component="span" />
    </>
  );
};
