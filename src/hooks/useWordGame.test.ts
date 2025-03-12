import { renderHook } from '@testing-library/react/pure';
import { act } from 'react';
import { useWordGame, WordStatus } from './useWordGame';
import { checkWordExists } from '../services/dictionaryService';

// Mock the dictionary service
jest.mock('../services/dictionaryService', () => ({
  checkWordExists: jest.fn()
}));

describe('useWordGame', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should initialize with empty word and neutral status', () => {
    const { result } = renderHook(() => useWordGame(5));
    expect(result.current.word).toEqual([]);
    expect(result.current.status).toBe(WordStatus.NEUTRAL);
    expect(result.current.isLoading).toBe(false);
  });

  test('should add characters to the word', () => {
    const { result } = renderHook(() => useWordGame(5));
    
    act(() => {
      result.current.handleAddCharacter('A');
    });
    expect(result.current.word).toEqual(['A']);
    
    act(() => {
      result.current.handleAddCharacter('B');
    });
    expect(result.current.word).toEqual(['A', 'B']);
  });

  test('should not add more characters than maxLength', () => {
    const { result } = renderHook(() => useWordGame(3));
    
    act(() => {
      result.current.handleAddCharacter('A');
      result.current.handleAddCharacter('B');
      result.current.handleAddCharacter('C');
      result.current.handleAddCharacter('D'); // This should be ignored
    });
    
    expect(result.current.word).toEqual(['A', 'B', 'C']);
  });

  test('should remove the last character', () => {
    const { result } = renderHook(() => useWordGame(5));
    
    act(() => {
      result.current.handleAddCharacter('A');
      result.current.handleAddCharacter('B');
    });
    expect(result.current.word).toEqual(['A', 'B']);
    
    act(() => {
      result.current.handleRemoveCharacter();
    });
    expect(result.current.word).toEqual(['A']);
  });

  test('should check if word exists and set status to valid', async () => {
    (checkWordExists as jest.Mock).mockResolvedValue(true);
    const { result } = renderHook(() => useWordGame(3));
    
    act(() => {
      result.current.handleAddCharacter('C');
      result.current.handleAddCharacter('A');
      result.current.handleAddCharacter('T');
    });
    
    expect(result.current.isLoading).toBe(false);
    
    let checkPromise: Promise<void>;
    act(() => {
      checkPromise = result.current.handleCheckWord();
    });
    
    // Loading state should be true immediately after calling handleCheckWord
    expect(result.current.isLoading).toBe(true);
    
    // Wait for the promise to resolve
    await act(async () => {
      await checkPromise;
    });
    
    expect(checkWordExists).toHaveBeenCalledWith('CAT');
    expect(result.current.status).toBe(WordStatus.VALID);
    expect(result.current.isLoading).toBe(false);
  });

  test('should check if word exists and set status to invalid', async () => {
    (checkWordExists as jest.Mock).mockResolvedValue(false);
    const { result } = renderHook(() => useWordGame(3));
    
    act(() => {
      result.current.handleAddCharacter('X');
      result.current.handleAddCharacter('Y');
      result.current.handleAddCharacter('Z');
    });
    
    expect(result.current.isLoading).toBe(false);
    
    let checkPromise: Promise<void>;
    act(() => {
      checkPromise = result.current.handleCheckWord();
    });
    
    // Loading state should be true immediately after calling handleCheckWord
    expect(result.current.isLoading).toBe(true);
    
    // Wait for the promise to resolve
    await act(async () => {
      await checkPromise;
    });
    
    expect(checkWordExists).toHaveBeenCalledWith('XYZ');
    expect(result.current.status).toBe(WordStatus.INVALID);
    expect(result.current.isLoading).toBe(false);
  });

  test('should reset the game', () => {
    const { result } = renderHook(() => useWordGame(5));
    
    act(() => {
      result.current.handleAddCharacter('A');
      result.current.handleAddCharacter('B');
    });
    expect(result.current.word).toEqual(['A', 'B']);
    
    act(() => {
      result.current.resetGame();
    });
    expect(result.current.word).toEqual([]);
    expect(result.current.status).toBe(WordStatus.NEUTRAL);
    expect(result.current.isLoading).toBe(false);
  });
}); 