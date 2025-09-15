"use server";
import api from "@/src/apiConfig/axiosInstance";
import { API_ENDPOINTS } from "@/src/apiConfig/endPoint";

export const signUp = async (payload) => {
  try {
    const res = await api.post(API_ENDPOINTS.SIGNUP, payload);
    return {
      success: true,
      status: res.status,
      data: res.data, // message, token, etc.
    };
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
