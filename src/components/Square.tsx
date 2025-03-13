import React from 'react';
import { Card } from "@/components/ui/Card";

interface SquareProps {
  character?: string;
  borderColorClass: string;
}

/**
 * Square component represents a single character square in the game
 */
const Square: React.FC<SquareProps> = ({ character = '', borderColorClass }) => {
  return (
    <Card 
      className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center text-xl sm:text-2xl font-bold ${borderColorClass} shadow-md cursor-default`}
      data-testid="square"
    >
      {character.toUpperCase()}
    </Card>
  );
};

export default Square; 