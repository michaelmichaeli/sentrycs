import { useState, useEffect, useRef } from 'react';
import { actionListener } from '../MyActionListener';
import { checkWordExists } from '../services/dictionaryService';
import { ActionType, WordStatus } from '@/types';

export const useWordGame = (maxLength: number) => {
  const [word, setWord] = useState<string[]>([]);
  const [status, setStatus] = useState<WordStatus>(WordStatus.NEUTRAL);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const wordRef = useRef<string[]>([]);

  useEffect(() => {
    wordRef.current = word;
  }, [word]);

  useEffect(() => {
    actionListener.registerListener(ActionType.ADD_CHARACTER, (data: unknown) => {
      if (typeof data === 'string') {
        setWord(prev => {
          if (prev.length < maxLength) {
            return [...prev, data];
          }
          return prev;
        });
        setStatus(WordStatus.NEUTRAL);
      }
    });

    actionListener.registerListener(ActionType.REMOVE_CHARACTER, () => {
      setWord(prev => {
        if (prev.length > 0) {
          return prev.slice(0, -1);
        }
        return prev;
      });
      setStatus(WordStatus.NEUTRAL);
    });

    actionListener.registerListener(ActionType.CHECK_WORD, async () => {
      const currentWord = wordRef.current;
      
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
          actionListener.emit(ActionType.CHECK_WORD_COMPLETE, null);
        }
      } else {
        setStatus(WordStatus.INVALID);
        actionListener.emit(ActionType.CHECK_WORD_COMPLETE, null);
      }
    });

    actionListener.registerListener(ActionType.RESET_GAME, () => {
      setWord([]);
      setStatus(WordStatus.NEUTRAL);
      setIsLoading(false);
    });

    return () => {
      actionListener.removeListener(ActionType.ADD_CHARACTER);
      actionListener.removeListener(ActionType.REMOVE_CHARACTER);
      actionListener.removeListener(ActionType.CHECK_WORD);
      actionListener.removeListener(ActionType.CHECK_WORD_COMPLETE);
      actionListener.removeListener(ActionType.RESET_GAME);
    };
  }, [maxLength]);

  const handleAddCharacter = (character: string) => {
    actionListener.emit(ActionType.ADD_CHARACTER, character);
  };

  const handleRemoveCharacter = () => {
    actionListener.emit(ActionType.REMOVE_CHARACTER, null);
  };

  const handleCheckWord = async (): Promise<void> => {
    const isWordComplete = wordRef.current.length === maxLength;
    
    if (!isWordComplete) {
      setStatus(WordStatus.INVALID);
      return;
    }
    
    await new Promise<void>((resolve) => {
      const onComplete = () => {
        actionListener.removeListener(ActionType.CHECK_WORD_COMPLETE);
        resolve();
      };
      
      actionListener.registerListener(ActionType.CHECK_WORD_COMPLETE, onComplete);
      actionListener.emit(ActionType.CHECK_WORD, null);
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