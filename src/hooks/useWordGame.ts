import { useState, useEffect, useRef } from 'react';
import { actionListener } from '../MyActionListener';
import { checkWordExists } from '../services/dictionaryService';

// Define action types
const ACTIONS = {
  ADD_CHARACTER: 'ADD_CHARACTER',
  REMOVE_CHARACTER: 'REMOVE_CHARACTER',
  CHECK_WORD: 'CHECK_WORD',
  RESET_GAME: 'RESET_GAME'
};

/**
 * Custom hook for managing the word game state and logic
 */
export const useWordGame = (maxLength: number) => {
  const [word, setWord] = useState<string[]>([]);
  const [status, setStatus] = useState<'valid' | 'invalid' | 'neutral'>('neutral');
  const wordRef = useRef<string[]>([]);

  // Keep the ref updated with the latest word value
  useEffect(() => {
    wordRef.current = word;
  }, [word]);

  // Register listeners when the hook is first used
  useEffect(() => {
    // Add character listener
    actionListener.registerListener(ACTIONS.ADD_CHARACTER, (character: string) => {
      setWord(prev => {
        if (prev.length < maxLength) {
          return [...prev, character];
        }
        return prev;
      });
      // Reset status when adding characters
      setStatus('neutral');
    });

    // Remove character listener
    actionListener.registerListener(ACTIONS.REMOVE_CHARACTER, () => {
      setWord(prev => {
        if (prev.length > 0) {
          return prev.slice(0, -1);
        }
        return prev;
      });
      // Reset status when removing characters
      setStatus('neutral');
    });

    // Check word listener
    actionListener.registerListener(ACTIONS.CHECK_WORD, async () => {
      const currentWord = wordRef.current;
      if (currentWord.length === maxLength) {
        const wordString = currentWord.join('');
        const isValid = await checkWordExists(wordString);
        setStatus(isValid ? 'valid' : 'invalid');
      } else {
        setStatus('invalid');
      }
    });

    // Reset game listener
    actionListener.registerListener(ACTIONS.RESET_GAME, () => {
      setWord([]);
      setStatus('neutral');
    });

    // Clean up listeners when component unmounts
    return () => {
      actionListener.removeListener(ACTIONS.ADD_CHARACTER);
      actionListener.removeListener(ACTIONS.REMOVE_CHARACTER);
      actionListener.removeListener(ACTIONS.CHECK_WORD);
      actionListener.removeListener(ACTIONS.RESET_GAME);
    };
  }, [maxLength]);

  // Handler functions
  const handleAddCharacter = (character: string) => {
    actionListener.emit(ACTIONS.ADD_CHARACTER, character);
  };

  const handleRemoveCharacter = () => {
    actionListener.emit(ACTIONS.REMOVE_CHARACTER, null);
  };

  const handleCheckWord = () => {
    actionListener.emit(ACTIONS.CHECK_WORD, null);
  };

  const resetGame = () => {
    actionListener.emit(ACTIONS.RESET_GAME, null);
  };

  return {
    word,
    status,
    handleAddCharacter,
    handleRemoveCharacter,
    handleCheckWord,
    resetGame
  };
}; 