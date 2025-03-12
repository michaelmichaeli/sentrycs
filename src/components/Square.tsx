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
      className={`w-16 h-16 flex items-center justify-center text-2xl font-bold ${borderColorClass} shadow-md cursor-default`}
      data-testid="square"
    >
      {character.toUpperCase()}
    </Card>
  );
};

export default Square; 