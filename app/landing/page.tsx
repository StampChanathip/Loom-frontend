"use client";
import PublicRoute from "@/components/guards/PublicRoute";

export default function Landing() {
  return (
    <PublicRoute>
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-4xl font-bold mb-4">Welcome to Landing Page</h1>
      </div>
    </PublicRoute>
  );
}
