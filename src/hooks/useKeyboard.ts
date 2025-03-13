import { useEffect } from 'react';

interface UseKeyboardProps {
  onCharacterClick: (char: string) => void;
  onBackspaceClick: () => void;
  onEnterClick: () => void;
  onResetGame: () => void;
  wordIsFull: boolean;
  isLoading?: boolean;
  disableKeys?: boolean;
  currentWordLength?: number;
}

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
  // Determine if Enter button should be disabled
  const isEnterDisabled = isLoading || !wordIsFull;

  // Determine if Backspace button should be disabled
  const isBackspaceDisabled = isLoading || currentWordLength === 0;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Prevent default behavior for game-related keys
      if (event.key.length === 1 || event.key === 'Enter' || event.key === 'Backspace' || event.key === ' ') {
        event.preventDefault();
      }

      // Handle letter keys (A-Z)
      if (/^[A-Za-z]$/.test(event.key) && !disableKeys && !isLoading && !wordIsFull) {
        onCharacterClick(event.key.toUpperCase());
      }
      // Handle Enter key
      else if (event.key === 'Enter' && !isEnterDisabled) {
        onEnterClick();
      }
      // Handle Backspace key
      else if (event.key === 'Backspace' && !isBackspaceDisabled) {
        onBackspaceClick();
      }
      // Handle Space key for reset
      else if (event.key === ' ' && !isLoading && currentWordLength > 0) {
        onResetGame();
      }
    };

    // Add event listener
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup
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