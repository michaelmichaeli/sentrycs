import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock the components used in App
jest.mock('./components/GameBoard', () => {
  return function MockGameBoard({ word, status }: { word: string[], status: string }) {
    return <div data-testid="game-board">GameBoard: {word.join('')} - {status}</div>;
  };
});

jest.mock('./components/Keyboard', () => {
  return function MockKeyboard() {
    return <div data-testid="keyboard">Keyboard</div>;
  };
});

// Mock the custom hook
jest.mock('./hooks/useWordGame', () => ({
  useWordGame: () => ({
    word: ['T', 'E', 'S', 'T'],
    status: 'neutral',
    handleAddCharacter: jest.fn(),
    handleRemoveCharacter: jest.fn(),
    handleCheckWord: jest.fn(),
    resetGame: jest.fn()
  })
}));

describe('App', () => {
  test('renders the title', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: 'Word Game' })).toBeInTheDocument();
  });

  test('renders the GameBoard component', () => {
    render(<App />);
    expect(screen.getByText('GameBoard: TEST - neutral')).toBeInTheDocument();
  });

  test('renders the Keyboard component', () => {
    render(<App />);
    expect(screen.getByText('Keyboard')).toBeInTheDocument();
  });
}); 