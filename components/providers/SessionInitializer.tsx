"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/stores/authStore";
import { getSessionAction } from "@/app/actions/auth";

/**
 * SessionInitializer - Syncs auth state with server on app load
 * This component should be rendered once in the root layout
 */
export default function SessionInitializer() {
  const { setAuth, clearAuth, setLoading, isHydrated } = useAuthStore();

  useEffect(() => {
    // Only run after Zustand store is hydrated
    if (!isHydrated) return;

    const initializeSession = async () => {
      setLoading(true);

      try {
        const result = await getSessionAction();

        if (result.success && result.user) {
          // Valid session found
          setAuth(result.user);
        } else {
          // No valid session
          clearAuth();
        }
      } catch (error) {
        console.error("Session initialization error:", error);
        clearAuth();
      } finally {
        setLoading(false);
      }
    };

    initializeSession();
  }, [isHydrated, setAuth, clearAuth, setLoading]);

  // This component doesn't render anything
  return null;
}
