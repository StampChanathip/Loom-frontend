"use client";
import ProtectedRoute from "@/components/guards/ProtectedRoute";

export default function Home() {
  return (
    <ProtectedRoute>
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-4xl font-bold mb-4">Welcome to Homepage</h1>
        <p className="text-lg text-gray-600">
          This is a protected route. Only authenticated users can see this.
        </p>
      </div>
    </ProtectedRoute>
  );
}
