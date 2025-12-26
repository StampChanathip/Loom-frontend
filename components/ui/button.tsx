import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground border-none rounded-md shadow-[0_10px_15px_-3px_rgba(57,172,115,0.3)] hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-lg active:bg-primary-dark active:translate-y-0 transition-[background,transform,box-shadow] duration-200",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 hover:-translate-y-0.5 hover:shadow-md focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border-2 border-primary bg-transparent text-primary-dark rounded-md font-semibold hover:bg-primary-50 transition-[background,transform] duration-200",
        secondary:
          "bg-gray-100 text-foreground border border-border rounded-md font-medium hover:bg-gray-200 transition-[background] duration-200",
        ghost:
          "bg-transparent text-primary-dark border-none rounded-md font-medium hover:bg-primary-50 transition-[background] duration-200",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-3 has-[>svg]:px-4",
        sm: "h-9 rounded-md gap-1.5 px-4 py-2 has-[>svg]:px-3 text-sm",
        lg: "h-12 rounded-md px-8 py-4 has-[>svg]:px-6 text-lg",
        icon: "size-11",
        "icon-sm": "size-9",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
