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

export const validationOtp = yup.object().shape({
  otp: yup
    .string()
    .required("OTP is required")
    .length(6, "OTP must be 6 digits")
    .matches(/^\d+$/, "OTP must be numbers only"),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});
