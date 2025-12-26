"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/authStore";
import { logoutAction } from "@/app/actions/auth";
import { useRouter } from "next/navigation";
import { useToast } from "@/shared/providers/ToastProvider";

export default function Header() {
  const { isAuthenticated, user, clearAuth } = useAuthStore();
  const router = useRouter();
  const { toastSuccess, toastError } = useToast();

  const handleLogout = async () => {
    try {
      const result = await logoutAction();
      if (result.success) {
        clearAuth();
        toastSuccess("Logged out successfully");
        router.push("/login");
      } else {
        toastError(result.error || "Logout failed");
      }
    } catch (error) {
      toastError("An error occurred during logout");
      console.error("Logout error:", error);
    }
  };

  return (
    <header className="bg-background border-b shadow-sm px-16 py-4">
      <nav className="flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex">
          <Link
            href={isAuthenticated ? "/homepage" : "/landing"}
            className="hover:cursor-pointer"
          >
            <Image
              src="/svg/loom-logo.svg"
              alt="Loom Logo"
              width={40}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* Right: Menu */}
        <div className="flex flex-row gap-2 items-center">
          {isAuthenticated ? (
            <>
              {user && (
                <span className="text-sm text-gray-600 mr-2">
                  Welcome, {user.firstName || user.name || user.email}
                </span>
              )}
              <Button variant="outline" asChild>
                <Link href="/homepage">Dashboard</Link>
              </Button>
              <Button variant="destructive" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" asChild>
                <Link href="/register">Register</Link>
              </Button>
              <Button asChild>
                <Link href="/login">Login</Link>
              </Button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
