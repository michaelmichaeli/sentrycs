import { useEffect } from 'react';
import { UseKeyboardProps } from '@/types';

export const useKeyboard = ({
  onCharacterClick,
  onBackspaceClick,
  onEnterClick,
  onResetGame,
  wordIsFull,
  isLoading = false,
  disableKeys = false,
  currentWordLength = 0
}: UseKeyboardProps) => {
  const isEnterDisabled = isLoading || !wordIsFull;

  const isBackspaceDisabled = isLoading || currentWordLength === 0;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key.length === 1 || event.key === 'Enter' || event.key === 'Backspace' || event.key === ' ') {
        event.preventDefault();
      }

      if (/^[A-Za-z]$/.test(event.key) && !disableKeys && !isLoading && !wordIsFull) {
        onCharacterClick(event.key.toUpperCase());
      }
      else if (event.key === 'Enter' && !isEnterDisabled) {
        onEnterClick();
      }
      else if (event.key === 'Backspace' && !isBackspaceDisabled) {
        onBackspaceClick();
      }
      else if (event.key === ' ' && !isLoading && currentWordLength > 0) {
        onResetGame();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [
    onCharacterClick,
    onBackspaceClick,
    onEnterClick,
    onResetGame,
    wordIsFull,
    isLoading,
    disableKeys,
    currentWordLength,
    isEnterDisabled,
    isBackspaceDisabled
  ]);

  return {
    isEnterDisabled,
    isBackspaceDisabled
  };
}; 