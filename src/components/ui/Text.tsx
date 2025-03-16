import type { ElementType, HTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva("font-head", {
  variants: {
    as: {
      p: "font-sans text-base",
      li: "font-sans text-base",
      a: "font-sans text-base hover:underline underline-offset-2 decoration-primary-500",
      h1: "text-4xl lg:text-5xl font-bold",
      h2: "text-3xl lg:text-4xl font-semibold",
      h3: "text-2xl font-medium",
      h4: "text-xl font-normal",
      h5: "text-lg font-normal",
      h6: "text-base font-normal",
    },
  },
  defaultVariants: {
    as: "p",
  },
});

export interface TextProps extends Omit<HTMLAttributes<HTMLElement>, "className"> {
  as?: "p" | "li" | "a" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}

export const Text = (props: TextProps) => {
  const { className, as, ...otherProps } = props;
  const Tag: ElementType = as || "p";

  return (
    <Tag className={cn(textVariants({ as }), className)} {...otherProps} />
  );
};
