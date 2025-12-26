"use server";

import { cookies } from "next/headers";
import { cookieStoreKey } from "@/shared/constants/cookieStoreKey";
import type { User } from "@/shared/types/api/authApiType";
import Axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

// Cookie options
const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  maxAge: 60 * 60 * 24 * 7, // 7 days
  path: "/",
};

// Server-side Axios instance (cannot import from client-side axiosConfig)
const serverApi = Axios.create({
  baseURL: API_URL,
  timeout: 30 * 1000,
  withCredentials: true,
});

/**
 * Set auth cookies - Called from client after successful login/register
 */
export async function setAuthCookies(
  accessToken: string,
  refreshToken?: string
): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    const cookieStore = await cookies();

    // Set httpOnly cookie with access token
    cookieStore.set(
      cookieStoreKey.accessToken,
      accessToken,
      COOKIE_OPTIONS
    );

    // Set refresh token if provided
    if (refreshToken) {
      cookieStore.set(
        cookieStoreKey.refreshToken,
        refreshToken,
        COOKIE_OPTIONS
      );
    }

    return {
      success: true,
    };
  } catch (error) {
    console.error("Set auth cookies error:", error);
    return {
      success: false,
      error: "Failed to set authentication cookies.",
    };
  }
}

/**
 * Logout action - Clears httpOnly cookies
 */
export async function logoutAction(): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    const cookieStore = await cookies();

    // Clear access token
    cookieStore.delete(cookieStoreKey.accessToken);

    // Clear refresh token
    cookieStore.delete(cookieStoreKey.refreshToken);

    // Optionally call backend logout endpoint
    try {
      await serverApi.post("/auth/logout");
    } catch (error) {
      // Silent fail - cookie is already cleared
      console.error("Backend logout failed:", error);
    }

    return {
      success: true,
    };
  } catch (error) {
    console.error("Logout action error:", error);
    return {
      success: false,
      error: "Logout failed. Please try again.",
    };
  }
}

/**
 * Get session action - Validates cookie and returns current user
 */
export async function getSessionAction(): Promise<{
  success: boolean;
  user?: User | null;
  error?: string;
}> {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get(cookieStoreKey.accessToken);

    if (!accessToken) {
      return {
        success: true,
        user: null,
      };
    }

    // Validate token with backend using server-side Axios
    try {
      const response = await serverApi.get("/auth/me", {
        headers: {
          Cookie: `${cookieStoreKey.accessToken}=${accessToken.value}`,
        },
      });

      const userData: User = response.data;

      return {
        success: true,
        user: userData,
      };
    } catch {
      // Token is invalid, clear cookies
      cookieStore.delete(cookieStoreKey.accessToken);
      cookieStore.delete(cookieStoreKey.refreshToken);

      return {
        success: true,
        user: null,
      };
    }
  } catch (error) {
    console.error("Get session action error:", error);
    return {
      success: false,
      error: "Failed to validate session.",
    };
  }
}
