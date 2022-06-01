import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";
import "../styles/styles.css";

export const RegisterPage = () => {
  const {
    name,
    email,
    password,
    passwordConfirm,
    handleChange,
    resetForm,
    isValidEmail,
  } = useForm({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Register Page</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          name="name"
          onChange={handleChange}
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          name="email"
          onChange={handleChange}
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>Email no es válido</span>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          name="password"
          onChange={handleChange}
        />
        {password.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password.trim().length < 6 && password.trim().length > 0 && (
          <span>La contraseña tiene que tener 6 letras</span>
        )}
        <input
          type="password"
          placeholder="Repeat Password"
          value={passwordConfirm}
          name="passwordConfirm"
          onChange={handleChange}
        />
        {passwordConfirm.trim().length <= 0 && (
          <span>Este campo es necesario</span>
        )}
        {passwordConfirm !== password && passwordConfirm.trim().length > 0 && (
          <span>Las contraseñas no coinciden</span>
        )}

        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
};
