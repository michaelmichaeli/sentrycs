import React from 'react';
import { Card } from "@/components/ui/Card";
import { SquareProps } from '@/types';
import { cn } from "@/design/utils";
import { squareVariants } from "@/design/components";

/**
 * Square component represents a single character square in the game
 */
const Square: React.FC<SquareProps> = ({ character = '', borderColorClass }) => {
  return (
    <Card 
      className={cn(
        squareVariants({ size: "lg" }),
        borderColorClass
      )}
    >
      {character.toUpperCase()}
    </Card>
  );
};

export default Square; 