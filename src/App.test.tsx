import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { WordStatus } from './hooks/useWordGame';

// Mock the components used in App
jest.mock('./components/GameBoard', () => {
  return function MockGameBoard({ word, status, maxLength }: { word: string[], status: string, maxLength: number }) {
    return (
      <div data-testid="game-board">
        GameBoard: {word.join('')} - {status} - Length: {maxLength}
      </div>
    );
  };
});

jest.mock('./components/Keyboard', () => {
  return function MockKeyboard() {
    return <div>Keyboard</div>;
  };
});

// Mock the custom hook
jest.mock('./hooks/useWordGame', () => {
  const originalModule = jest.requireActual('./hooks/useWordGame');
  const mockResetGame = jest.fn();
  
  return {
    ...originalModule,
    useWordGame: () => ({
      word: ['T', 'E', 'S', 'T'],
      status: originalModule.WordStatus.NEUTRAL,
      isLoading: false,
      handleAddCharacter: jest.fn(),
      handleRemoveCharacter: jest.fn(),
      handleCheckWord: jest.fn(),
      resetGame: mockResetGame
    }),
    mockResetGame
  };
});

describe('App', () => {
  test('renders the title', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: 'Word Game' })).toBeInTheDocument();
  });

  test('renders the GameBoard component', () => {
    render(<App />);
    expect(screen.getByText(/GameBoard: TEST - neutral - Length: 5/i)).toBeInTheDocument();
  });

  test('renders the Keyboard component', () => {
    render(<App />);
    expect(screen.getByText('Keyboard')).toBeInTheDocument();
  });
  
  test('renders the Reset Game button', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: 'Reset Game' })).toBeInTheDocument();
  });
  
  test('calls resetGame when Reset Game button is clicked', () => {
    const { mockResetGame } = require('./hooks/useWordGame');
    render(<App />);
    
    const resetButton = screen.getByRole('button', { name: 'Reset Game' });
    fireEvent.click(resetButton);
    
    expect(mockResetGame).toHaveBeenCalledTimes(1);
  });
}); 