import React from 'react';
import { Card } from "@/components/ui/Card";

interface KeyProps {
  character?: string;
  borderColorClass: string;
}

/**
 * Key component represents a single character key in the game
 */
const Key: React.FC<KeyProps> = ({ character = '', borderColorClass }) => {
  return (
    <Card 
      className={`w-16 h-16 flex items-center justify-center text-2xl font-bold ${borderColorClass} transition-all duration-300`}
      data-testid="key"
    >
      {character.toUpperCase()}
    </Card>
  );
};

export default Key; 