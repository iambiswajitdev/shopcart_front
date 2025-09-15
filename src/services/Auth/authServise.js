"use server";
import api from "@/src/apiConfig/axiosInstance";
import { API_ENDPOINTS } from "@/src/apiConfig/endPoint";

export const signUp = async (payload) => {
  console.log("payload", payload);

  const { data } = await api.post(API_ENDPOINTS.SIGNUP, payload);
  return data;
};
