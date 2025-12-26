import { envConfig } from "@/configs/configs";
import Axios from "axios";

const baseURL: string = envConfig.API_URL;
const basic: string = envConfig.BASIC_API;

export const commonApi = Axios.create({
  baseURL: baseURL,
  timeout: 10 * 1000,
  withCredentials: true,
});

export const authApi = Axios.create({
  baseURL: baseURL,
  timeout: 30 * 1000,
  withCredentials: true,
});

export const basicApi = Axios.create({
  baseURL: baseURL,
  timeout: 10 * 1000,
  headers: {
    Authorization: "Basic " + basic,
  },
  withCredentials: true,
});

// Response interceptor for handling 401 errors
commonApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Import dynamically to avoid circular dependencies
      const { logoutAction } = await import("@/app/actions/auth");
      const { useAuthStore } = await import("@/stores/authStore");

      // Clear auth state
      useAuthStore.getState().clearAuth();

      // Call logout action to clear cookies
      await logoutAction();

      // Redirect to login page
      if (typeof window !== "undefined") {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

authApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      const { logoutAction } = await import("@/app/actions/auth");
      const { useAuthStore } = await import("@/stores/authStore");

      useAuthStore.getState().clearAuth();
      await logoutAction();

      if (typeof window !== "undefined") {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);
