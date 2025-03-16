import { cn } from "@/design/utils";
import { cardVariants } from "@/design/components";
import { Text } from "@/components/ui/Text";
import { HTMLAttributes } from "react";
import { BorderRadius, CardVariant, PaddingSize } from "@/design/constants";

export interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: CardVariant;
  padding?: PaddingSize;
  rounded?: BorderRadius;
}

// Simpler props for child components
type CardChildProps = HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

const Card = ({ 
  className, 
  variant = "default",
  padding = "md",
  rounded = "md",
  ...props 
}: ICardProps) => {
  return (
    <div
      className={cn(
        cardVariants({ variant, padding, rounded }),
        className
      )}
      {...props}
    />
  );
};

const CardHeader = ({ className, ...props }: CardChildProps) => {
  return <div className={cn("p-4", className)} {...props} />;
};

const CardTitle = ({ className, ...props }: CardChildProps) => {
  return <Text as="h3" className={cn("mb-2", className)} {...props} />;
};

const CardDescription = ({ className, ...props }: CardChildProps) => {
  return (
    <Text variant="muted" className={cn("text-sm", className)} {...props} />
  );
};

const CardContent = ({ className, ...props }: CardChildProps) => {
  return <div className={cn("p-4 pt-0", className)} {...props} />;
};

const CardComponent = Object.assign(Card, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
});

export { CardComponent as Card };
