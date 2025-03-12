import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { ButtonHTMLAttributes } from "react";

const buttonVariants = cva("font-head transition-all outline-none", {
  variants: {
    variant: {
      default:
        "shadow-md hover:shadow-xs bg-primary-400 text-black border-2 border-black hover:bg-primary-500 disabled:shadow-none disabled:hover:shadow-none disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:cursor-not-allowed",
      outline:
        "shadow-md hover:shadow-xs bg-transparent text-black border-2 border-black disabled:shadow-none disabled:hover:shadow-none disabled:bg-gray-200 disabled:hover:bg-gray-200 disabled:cursor-not-allowed",
      link: "bg-transparent text-black hover:underline disabled:no-underline disabled:cursor-not-allowed",
    },
    size: {
      sm: "px-4 py-1 text-sm",
      md: "px-6 py-2 text-base",
      lg: "px-8 py-3 text-lg",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "default",
  },
});

export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      children,
      size = "md",
      className = "",
      variant = "default",
      ...props
    }: IButtonProps,
    forwardedRef
  ) => (
    <button
      ref={forwardedRef}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  )
);

Button.displayName = "Button";
