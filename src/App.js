import React from 'react'
import "./style.css";
import { Formik, Form, Field } from "formik";
import CustomInput from "./CustomInput";
import { advanceSchema } from "./schema";

export default function App() {
  return (
    <div className="App">
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: ""
        }}
        validationSchema={advanceSchema}
      >
        {(props) => (
          <Form>
            <CustomInput
              label="username"
              name="username"
              type="text"
              placeholder="enter your username"
            />
            <br />

            <CustomInput
              label="email"
              name="email"
              type="email"
              placeholder="enter your email"
            />
            <br />

            <CustomInput
              label="password"
              name="password"
              type="password"
              placeholder="enter your password"
            />
            <br />

            <CustomInput
              label="confirm password"
              name="confirmPassword"
              type="password"
              placeholder="enter your confirm password"
            />
            <br />
            <button type="submit">submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
