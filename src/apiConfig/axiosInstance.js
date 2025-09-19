"use server";
import { BASE_URL } from "@/utilit/constant";
import axios from "axios";
import { cookies } from "next/headers"; // for server components

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // include cookies if backend uses them
});

// ✅ Add interceptors
api.interceptors.request.use(async (config) => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("_token")?.value || "";
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (error) {
    console.log("error", error);
  }
});

api.interceptors.response.use(
  (res) => res?.data,
  (err) => {
    if (err.response?.status === 401) {
      console.error("Unauthorized: maybe redirect to login");
    }
    return Promise.reject(err);
  }
);

export default api;
