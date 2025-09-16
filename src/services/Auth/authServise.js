"use server";
import api from "@/src/apiConfig/axiosInstance";
import { API_ENDPOINTS } from "@/src/apiConfig/endPoint";

// ?**** USER SIGNUP API
export const signUp = async (payload) => {
  try {
    const res = await api.post(API_ENDPOINTS.SIGNUP, payload);
    console.log("res===>", res);

    return res;
  } catch (error) {
    return {
      success: false,
      status: error?.response?.status ?? 500,
      message:
        error?.response?.data?.message ??
        error?.message ??
        "Something went wrong",
    };
  }
};

// ?***** USER EMAIL VERIFI OTP API
export const verifyEmail = async (payload) => {
  try {
    const res = await api.post(API_ENDPOINTS.VERIFI_EMAIL, payload);
    console.log("resotp==>", res.data);

    return res;
  } catch (error) {
    console.log("resotp", error);

    return {
      success: false,
      status: error?.response?.status ?? 500,
      message:
        error?.response?.data?.message ??
        error?.message ??
        "Something went wrong",
    };
  }
};

// ?***** USER RESEND OTP API
export const verifySendEmail = async (payload) => {
  try {
    const res = await api.post(API_ENDPOINTS.FORGOT_PASSWORD, payload);
    console.log("verifySendEmail==>", res.data);
    return res;
  } catch (error) {
    console.log("verifySendEmail", error);
    return {
      success: false,
      status: error?.response?.status ?? 500,
      message:
        error?.response?.data?.message ??
        error?.message ??
        "Something went wrong",
    };
  }
};
