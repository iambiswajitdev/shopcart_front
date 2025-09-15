"use server";
import axios from "axios";
import { cookies } from "next/headers"; // for server components

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // include cookies if backend uses them
});

// ✅ Universal function to get token (works in server & client)
function getToken() {
  if (typeof window === "undefined") {
    // Server Component → use next/headers
    try {
      const cookieStore = cookies();
      return cookieStore.get("token")?.value || null;
    } catch {
      return null;
    }
  } else {
    // Client Component → use localStorage
    return localStorage.getItem("token");
  }
}

// ✅ Add interceptors
api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      console.error("Unauthorized: maybe redirect to login");
    }
    return Promise.reject(err);
  }
);

export default api;
