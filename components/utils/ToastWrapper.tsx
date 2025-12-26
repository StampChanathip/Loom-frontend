"use client";

import { Toaster } from "@/components/ui/sonner";

export default function ToastWrapper() {
  return (
    <Toaster
      position="top-center"
      expand={false}
      duration={5000}
      closeButton
      richColors={false}
    />
  );
}
