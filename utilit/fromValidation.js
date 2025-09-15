import * as yup from "yup";

// ✅ Validation Schema
export const validationSignUp = yup.object().shape({
  name: yup.string().required("Name is required").min(2, "Name is too short"),
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});
