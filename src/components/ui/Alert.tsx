import { cva } from "class-variance-authority";
import { cn } from "@/design/utils";
import { Text } from "@/components/ui/Text";
import { HtmlHTMLAttributes } from "react";

const alertVariants = cva("relative w-full border-2 border-black p-4", {
  variants: {
    variant: {
      default: "bg-primary-300 text-foreground",
      solid: "bg-black text-white",
    },
    status: {
      error: "bg-red-300 text-red-800 border-red-800",
      success: "bg-green-300 text-green-800 border-green-800",
      warning: "bg-yellow-300 text-yellow-800 border-yellow-800",
      info: "bg-blue-300 text-blue-800 border-blue-800",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface IAlertProps extends HtmlHTMLAttributes<HTMLDivElement> {
  variant?: "default" | "solid";
  status?: "error" | "success" | "warning" | "info";
}

const Alert = ({ className, variant, status, ...props }: IAlertProps) => (
  <div
    role="alert"
    className={cn(alertVariants({ variant, status }), className)}
    {...props}
  />
);
Alert.displayName = "Alert";

export interface IAlertTitleProps extends HtmlHTMLAttributes<HTMLHeadingElement> {}

const AlertTitle = ({ className, ...props }: IAlertTitleProps) => (
  <Text as="h5" className={cn(className)} {...props} />
);
AlertTitle.displayName = "AlertTitle";

export interface IAlertDescriptionProps extends HtmlHTMLAttributes<HTMLParagraphElement> {}

const AlertDescription = ({ className, ...props }: IAlertDescriptionProps) => (
  <Text className={cn("text-sm", className)} {...props} />
);
AlertDescription.displayName = "AlertDescription";

const AlertComponent = Object.assign(Alert, {
  Title: AlertTitle,
  Description: AlertDescription,
});

export { AlertComponent as Alert };
