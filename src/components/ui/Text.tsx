import type { ElementType, HTMLAttributes } from "react";
import { cn } from "@/design/utils";
import { textVariants } from "@/design/components";
import { TextVariant, FontWeight, FontFamily, TextSize } from "@/design/constants";

const elementStyles = {
  p: "font-sans text-base",
  li: "font-sans text-base",
  a: "font-sans text-base hover:underline underline-offset-2 decoration-primary-500",
  h1: "text-4xl lg:text-5xl font-bold font-head",
  h2: "text-3xl lg:text-4xl font-semibold font-head",
  h3: "text-2xl font-medium font-head",
  h4: "text-xl font-normal font-head",
  h5: "text-lg font-normal font-head",
  h6: "text-base font-normal font-head",
};

export interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: keyof typeof elementStyles;
  variant?: TextVariant;
  size?: TextSize;
  weight?: FontWeight;
  font?: FontFamily;
  className?: string;
}

export const Text = (props: TextProps) => {
  const { 
    className, 
    as = "p", 
    variant = "default",
    size,
    weight,
    font,
    ...otherProps 
  } = props;
  
  const Tag: ElementType = as;

  return (
    <Tag 
      className={cn(
        elementStyles[as],
        textVariants({ variant, size, weight, font }), 
        className
      )} 
      {...otherProps} 
    />
  );
};
