import { cn } from "@/design/utils";
import { buttonVariants } from "@/design/components";
import { ButtonSize, ButtonVariant } from "@/design/constants";
import React, { ButtonHTMLAttributes } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
}

export const Button = React.memo(React.forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      children,
      size = "md",
      className = "",
      variant = "default",
      ...props
    }: IButtonProps,
    forwardedRef
  ) => {
    console.log("Button Props: ", children);
    
    return <button
      ref={forwardedRef}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  }
));

Button.displayName = "Button";
