"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/authStore";
import Loading from "@/components/utils/Loading";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

/**
 * ProtectedRoute - Wrapper for pages that require authentication
 * Redirects to /login if user is not authenticated
 */
export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading, isHydrated } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    // Wait for store hydration before checking auth
    if (!isHydrated) return;

    // Redirect to login if not authenticated and not loading
    if (!isLoading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, isLoading, isHydrated, router]);

  // Show loading while checking authentication or hydrating
  if (!isHydrated || isLoading) {
    return <Loading isLoading={true}>{null}</Loading>;
  }

  // Don't render if not authenticated (will redirect)
  if (!isAuthenticated) {
    return null;
  }

  // Render children if authenticated
  return <>{children}</>;
}
