import React from 'react';
import Square from './Square';
import { GameBoardProps, WordStatus } from '@/types';
import { Text } from "@/components/ui/Text";

/**
 * GameBoard component displays the squares for the word game
 */
const GameBoard: React.FC<GameBoardProps> = ({ word, status, maxLength }) => {
  // Create an array of squares based on the maxLength
  const squares = Array(maxLength).fill(null);

  // Determine the border color based on status
  const getBorderColor = () => {
    switch (status) {
      case WordStatus.VALID:
        return 'border-green-500';
      case WordStatus.INVALID:
        return 'border-red-500';
      default:
        return 'border-gray-400';
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Text className="text-sm text-muted h-8 flex items-center">Your Word</Text>
      <div className="flex gap-2 my-2">
        {squares.map((_, index) => (
          <Square 
            key={index} 
            character={word[index] || ''} 
            borderColorClass={getBorderColor()}
          />
        ))}
      </div>
      <Text className="text-sm text-muted h-5 flex items-center">
        {word.length}/{maxLength} letters
      </Text>
    </div>
  );
};

export default GameBoard; 