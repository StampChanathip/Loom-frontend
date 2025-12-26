"use client";
import { createContext, useContext, ReactNode } from "react";
import { toast } from "sonner";

type ToastContextType = {
  toastError: (message: string) => void;
  toastSuccess: (message: string) => void;
  toastInfo: (message: string) => void;
  toastWarning: (message: string) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const toastError = (message: string) => {
    toast.error(message);
  };

  const toastSuccess = (message: string) => {
    toast.success(message);
  };

  const toastInfo = (message: string) => {
    toast.info(message);
  };

  const toastWarning = (message: string) => {
    toast.warning(message);
  };

  return (
    <ToastContext.Provider
      value={{
        toastError,
        toastSuccess,
        toastInfo,
        toastWarning,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};
