"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/authStore";
import Loading from "@/components/utils/Loading";

export default function Home() {
  const router = useRouter();
  const { isAuthenticated, isLoading, isHydrated } = useAuthStore();

  useEffect(() => {
    // Wait for Zustand to hydrate
    if (!isHydrated) return;

    // Wait for auth check to complete
    if (isLoading) return;

    // Redirect based on authentication status
    if (isAuthenticated) {
      router.push("/homepage");
    } else {
      router.push("/landing");
    }
  }, [isAuthenticated, isLoading, isHydrated, router]);

  // Show loading while determining redirect
  return <Loading isLoading={true}>{null}</Loading>;
}
