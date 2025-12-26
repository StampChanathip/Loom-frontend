"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <h1 className="text-9xl font-bold text-primary">404</h1>
      <h2 className="text-4xl font-bold mt-4">Page Not Found</h2>
      <p className="text-lg text-gray-600 mt-4 text-center">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <Button asChild>
          <Link href="/">Go Back Home</Link>
        </Button>
        <Button variant="outline" onClick={() => router.back()}>
          Go Back
        </Button>
      </div>
    </main>
  );
}
