import React from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import {
  UserFormContainer,
  UserForm,
  UserFormTitle,
  UserFormGroup,
  UserFormLabel,
  UserFormInput,
  UserFormSubmit,
} from "./layout";
import { useUser } from '../contexts/user'

export default function Login() {
  const { user, setUser } = useUser();
  let history = useHistory();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      const response = await fetch(`http://localhost:3000/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (response.ok) {
        setUser(data);
        history.push("/notes");
      } else {
        setUser(null);
        console.error(data);
      }
    },
  });

  return (
    <UserFormContainer>
      <UserFormTitle style={{ margin: "60px 0 15px" }}>Login</UserFormTitle>

      <UserForm style={{ marginBottom: "35px" }} onSubmit={formik.handleSubmit}>
        <UserFormGroup>
          <UserFormLabel htmlFor="username">username:</UserFormLabel>
          <UserFormInput
            type="text"
            id="username"
            name="username"
            placeholder="..."
            {...formik.getFieldProps("username")}
          />
        </UserFormGroup>

        <UserFormGroup>
          <UserFormLabel htmlFor="password">password:</UserFormLabel>
          <UserFormInput
            type="password"
            id="password"
            name="password"
            placeholder="..."
            {...formik.getFieldProps("password")}
          />
        </UserFormGroup>

        <UserFormSubmit>Login</UserFormSubmit>
      </UserForm>

      <UserFormTitle type="submit">Go to Sign Up</UserFormTitle>
    </UserFormContainer>
  );
}
