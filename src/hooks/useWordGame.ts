import { useState, useEffect, useRef } from 'react';
import { actionListener } from '../MyActionListener';
import { checkWordExists } from '../services/dictionaryService';

// Define action types as enum
export enum ActionType {
  ADD_CHARACTER = 'ADD_CHARACTER',
  REMOVE_CHARACTER = 'REMOVE_CHARACTER',
  CHECK_WORD = 'CHECK_WORD',
  CHECK_WORD_COMPLETE = 'CHECK_WORD_COMPLETE',
  RESET_GAME = 'RESET_GAME'
}

// Define status types as enum
export enum WordStatus {
  VALID = 'valid',
  INVALID = 'invalid',
  NEUTRAL = 'neutral'
}

/**
 * Custom hook for managing the word game state and logic
 */
export const useWordGame = (maxLength: number) => {
  const [word, setWord] = useState<string[]>([]);
  const [status, setStatus] = useState<WordStatus>(WordStatus.NEUTRAL);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const wordRef = useRef<string[]>([]);

  // Keep the ref updated with the latest word value
  useEffect(() => {
    wordRef.current = word;
  }, [word]);

  // Register listeners when the hook is first used
  useEffect(() => {
    // Add character listener
    actionListener.registerListener(ActionType.ADD_CHARACTER, (character: string) => {
      setWord(prev => {
        if (prev.length < maxLength) {
          return [...prev, character];
        }
        return prev;
      });
      // Reset status when adding characters
      setStatus(WordStatus.NEUTRAL);
    });

    // Remove character listener
    actionListener.registerListener(ActionType.REMOVE_CHARACTER, () => {
      setWord(prev => {
        if (prev.length > 0) {
          return prev.slice(0, -1);
        }
        return prev;
      });
      // Reset status when removing characters
      setStatus(WordStatus.NEUTRAL);
    });

    // Check word listener
    actionListener.registerListener(ActionType.CHECK_WORD, async () => {
      const currentWord = wordRef.current;
      
      // Only proceed with API call if word is complete
      if (currentWord.length === maxLength) {
        setIsLoading(true);
        try {
          const wordString = currentWord.join('');
          const isValid = await checkWordExists(wordString);
          setStatus(isValid ? WordStatus.VALID : WordStatus.INVALID);
        } catch (error) {
          console.error('Error checking word:', error);
          setStatus(WordStatus.INVALID);
        } finally {
          setIsLoading(false);
          // Emit completion event
          actionListener.emit(ActionType.CHECK_WORD_COMPLETE, null);
        }
      } else {
        // Word is incomplete, mark as invalid without API call
        setStatus(WordStatus.INVALID);
        // Emit completion event for invalid length
        actionListener.emit(ActionType.CHECK_WORD_COMPLETE, null);
      }
    });

    // Reset game listener
    actionListener.registerListener(ActionType.RESET_GAME, () => {
      setWord([]);
      setStatus(WordStatus.NEUTRAL);
      setIsLoading(false);
    });

    // Clean up listeners when component unmounts
    return () => {
      actionListener.removeListener(ActionType.ADD_CHARACTER);
      actionListener.removeListener(ActionType.REMOVE_CHARACTER);
      actionListener.removeListener(ActionType.CHECK_WORD);
      actionListener.removeListener(ActionType.CHECK_WORD_COMPLETE);
      actionListener.removeListener(ActionType.RESET_GAME);
    };
  }, [maxLength]);

  // Handler functions
  const handleAddCharacter = (character: string) => {
    actionListener.emit(ActionType.ADD_CHARACTER, character);
  };

  const handleRemoveCharacter = () => {
    actionListener.emit(ActionType.REMOVE_CHARACTER, null);
  };

  const handleCheckWord = (): Promise<void> => {
    return new Promise<void>((resolve) => {
      // Create a one-time listener to resolve the promise when the check is complete
      const checkCompleteListener = () => {
        resolve();
        actionListener.removeListener(ActionType.CHECK_WORD_COMPLETE);
      };
      
      actionListener.registerListener(ActionType.CHECK_WORD_COMPLETE, checkCompleteListener);
      
      // Check if word is complete before emitting the check event
      const isWordComplete = wordRef.current.length === maxLength;
      
      // Emit the check word event
      actionListener.emit(ActionType.CHECK_WORD, null);
      
      // If the word is not complete, resolve immediately
      if (!isWordComplete) {
        resolve();
        actionListener.removeListener(ActionType.CHECK_WORD_COMPLETE);
      }
    });
  };

  const resetGame = () => {
    actionListener.emit(ActionType.RESET_GAME, null);
  };

  return {
    word,
    status,
    isLoading,
    handleAddCharacter,
    handleRemoveCharacter,
    handleCheckWord,
    resetGame
  };
}; 