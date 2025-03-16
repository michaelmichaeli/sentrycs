import { cva } from "class-variance-authority";

// Button variants
export const buttonVariants = cva("font-head transition-all outline-none", {
  variants: {
    variant: {
      default:
        "shadow-md hover:shadow-xs bg-primary-400 text-black border-2 border-black hover:bg-primary-500",
      outline:
        "shadow-md hover:shadow-xs bg-transparent text-black border-2 border-black",
      link: "bg-transparent text-black hover:underline",
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

// Card variants
export const cardVariants = cva("bg-white border-2 border-black", {
  variants: {
    variant: {
      default: "shadow-md",
      flat: "",
      interactive: "shadow-md hover:shadow-sm transition-all cursor-pointer",
    },
    padding: {
      none: "",
      sm: "p-2",
      md: "p-4",
      lg: "p-6",
    },
    rounded: {
      none: "",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    padding: "md",
    rounded: "md",
  },
});

// Alert variants
export const alertVariants = cva("border-2 border-black p-4 relative", {
  variants: {
    variant: {
      default: "bg-white",
      success: "bg-green-100",
      error: "bg-red-100",
      warning: "bg-yellow-100",
      info: "bg-blue-100",
    },
    rounded: {
      none: "",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    rounded: "md",
  },
});

// Text variants
export const textVariants = cva("", {
  variants: {
    variant: {
      default: "text-foreground",
      muted: "text-muted",
      primary: "text-primary-500",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      bold: "font-bold",
    },
    font: {
      sans: "font-sans",
      head: "font-head",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    weight: "normal",
    font: "sans",
  },
});

// Dialog variants
export const dialogVariants = cva("bg-white border-2 border-black shadow-md", {
  variants: {
    size: {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      full: "max-w-full",
    },
    rounded: {
      none: "",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
    },
  },
  defaultVariants: {
    size: "md",
    rounded: "md",
  },
});

// Accordion variants
export const accordionVariants = cva("border-2 border-black", {
  variants: {
    variant: {
      default: "bg-white",
      outline: "bg-transparent",
    },
    rounded: {
      none: "",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    rounded: "md",
  },
}); 