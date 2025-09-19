"use server";
import api from "@/src/apiConfig/axiosInstance";
import { API_ENDPOINTS } from "@/src/apiConfig/endPoint";

export const fetchUserDetailsApi = async (data) => {
  try {
    const res = await api.get(`${API_ENDPOINTS.GET_USER}/${data}`);
    console.log("res===>", res);

    return res.data;
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
