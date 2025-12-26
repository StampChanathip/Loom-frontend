"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/authStore";
import Loading from "@/components/utils/Loading";

interface PublicRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
}

/**
 * PublicRoute - Wrapper for pages that should only be accessible when NOT authenticated
 * (e.g., login, register pages)
 * Redirects authenticated users to homepage or specified route
 */
export default function PublicRoute({
  children,
  redirectTo = "/homepage",
}: PublicRouteProps) {
  const { isAuthenticated, isLoading, isHydrated } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    // Wait for store hydration before checking auth
    if (!isHydrated) return;

    // Redirect to homepage if already authenticated and not loading
    if (!isLoading && isAuthenticated) {
      router.push(redirectTo);
    }
  }, [isAuthenticated, isLoading, isHydrated, redirectTo, router]);

  // Show loading while checking authentication or hydrating
  if (!isHydrated || isLoading) {
    return <Loading isLoading={true}>{null}</Loading>;
  }

  // Don't render if authenticated (will redirect)
  if (isAuthenticated) {
    return null;
  }

  // Render children if not authenticated
  return <>{children}</>;
}
