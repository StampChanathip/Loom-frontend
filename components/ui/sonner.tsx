"use client";

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      toastOptions={{
        unstyled: false,
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white group-[.toaster]:text-foreground group-[.toaster]:border-0 group-[.toaster]:shadow-lg group-[.toaster]:rounded-xl group-[.toaster]:p-4 group-[.toaster]:gap-4 group-[.toaster]:border-l-4",
          description: "group-[.toast]:text-muted-foreground group-[.toast]:text-sm",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          success:
            "group-[.toaster]:border-l-success group-[.toast]:text-success",
          error:
            "group-[.toaster]:border-l-destructive group-[.toast]:text-destructive",
          warning:
            "group-[.toaster]:border-l-warning group-[.toast]:text-warning",
          info: "group-[.toaster]:border-l-info group-[.toast]:text-info",
          icon: "group-[.toast]:flex group-[.toast]:items-center group-[.toast]:justify-center group-[.toast]:rounded-full group-[.toast]:size-6 group-[.toast]:text-white group-[.toast]:flex-shrink-0",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
