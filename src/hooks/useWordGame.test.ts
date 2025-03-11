import { renderHook } from '@testing-library/react/pure';
import { act } from 'react';
import { useWordGame } from './useWordGame';
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
    expect(result.current.status).toBe('neutral');
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
    
    await act(async () => {
      await result.current.handleCheckWord();
    });
    
    expect(checkWordExists).toHaveBeenCalledWith('CAT');
    expect(result.current.status).toBe('valid');
  });

  test('should check if word exists and set status to invalid', async () => {
    (checkWordExists as jest.Mock).mockResolvedValue(false);
    const { result } = renderHook(() => useWordGame(3));
    
    act(() => {
      result.current.handleAddCharacter('X');
      result.current.handleAddCharacter('Y');
      result.current.handleAddCharacter('Z');
    });
    
    await act(async () => {
      await result.current.handleCheckWord();
    });
    
    expect(checkWordExists).toHaveBeenCalledWith('XYZ');
    expect(result.current.status).toBe('invalid');
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
    expect(result.current.status).toBe('neutral');
  });
}); 