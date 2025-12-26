import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-gray-400 selection:bg-primary selection:text-primary-foreground",
        "h-10 w-full min-w-0 rounded-md border-2 border-border bg-background px-4 py-2 text-base text-foreground",
        "transition-all duration-150 ease-in-out outline-none",
        "focus:border-primary focus:shadow-[0_0_0_3px] focus:shadow-primary-100",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "dark:bg-input/30",
        className
      )}
      {...props}
    />
  );
}

export { Input };
