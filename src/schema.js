import * as yup from "yup";

const passRule = "/^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$/";

export const advanceSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "username must be atleast 3 characters long")
    .required("field is required"),

  email: yup
    .string()
    .email("Please enter a valid email")
    .required("field is required"),

  password: yup
    .string()
    .min(8)
    .required("password is required")
    .matches(passRule, {
      message:
        "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number"
    }),

  confirmPassword: yup
    .string()
    .required("password is required")
    .oneOf([yup.ref("password"), null], "password doess not match")
});
