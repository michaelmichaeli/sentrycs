import { cn } from "@/lib/utils";
import { Text } from "@/components/ui/Text";
import { HTMLAttributes } from "react";

export interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Card = ({ className, ...props }: ICardProps) => {
  return (
    <div
      className={cn(
        "inline-block border-2 border-black shadow-md bg-white/90",
        className
      )}
      {...props}
    />
  );
};

const CardHeader = ({ className, ...props }: ICardProps) => {
  return <div className={cn("p-4", className)} {...props} />;
};

const CardTitle = ({ className, ...props }: ICardProps) => {
  return <Text as="h3" className={cn("mb-2", className)} {...props} />;
};

const CardDescription = ({ className, ...props }: ICardProps) => {
  return (
    <Text className={cn("text-sm text-muted-foreground", className)} {...props} />
  );
};

const CardContent = ({ className, ...props }: ICardProps) => {
  return <div className={cn("p-4 pt-0", className)} {...props} />;
};

const CardComponent = Object.assign(Card, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
});

export { CardComponent as Card };
