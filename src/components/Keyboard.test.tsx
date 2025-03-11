import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Keyboard from './Keyboard';

describe('Keyboard', () => {
  const mockCharClick = jest.fn();
  const mockBackspaceClick = jest.fn();
  const mockEnterClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders all letter buttons', () => {
    render(
      <Keyboard 
        onCharacterClick={mockCharClick}
        onBackspaceClick={mockBackspaceClick}
        onEnterClick={mockEnterClick}
        wordIsFull={false}
      />
    );
    
    // Check if all letters from A to Z are rendered as buttons
    for (let charCode = 65; charCode <= 90; charCode++) {
      const letter = String.fromCharCode(charCode);
      expect(screen.getByRole('button', { name: letter })).toBeInTheDocument();
    }
  });

  test('renders enter and backspace buttons', () => {
    render(
      <Keyboard 
        onCharacterClick={mockCharClick}
        onBackspaceClick={mockBackspaceClick}
        onEnterClick={mockEnterClick}
        wordIsFull={false}
      />
    );
    
    expect(screen.getByRole('button', { name: 'ENTER' })).toBeInTheDocument();
    const backspaceButton = screen.getByRole('button', { name: /backspace/i });
    expect(backspaceButton).toBeInTheDocument();
  });

  test('calls onCharacterClick when a letter button is clicked', () => {
    render(
      <Keyboard 
        onCharacterClick={mockCharClick}
        onBackspaceClick={mockBackspaceClick}
        onEnterClick={mockEnterClick}
        wordIsFull={false}
      />
    );
    
    fireEvent.click(screen.getByRole('button', { name: 'A' }));
    expect(mockCharClick).toHaveBeenCalledWith('A');
  });

  test('calls onEnterClick when enter button is clicked', () => {
    render(
      <Keyboard 
        onCharacterClick={mockCharClick}
        onBackspaceClick={mockBackspaceClick}
        onEnterClick={mockEnterClick}
        wordIsFull={false}
      />
    );
    
    fireEvent.click(screen.getByRole('button', { name: 'ENTER' }));
    expect(mockEnterClick).toHaveBeenCalled();
  });

  test('calls onBackspaceClick when backspace button is clicked', () => {
    render(
      <Keyboard 
        onCharacterClick={mockCharClick}
        onBackspaceClick={mockBackspaceClick}
        onEnterClick={mockEnterClick}
        wordIsFull={false}
      />
    );
    
    fireEvent.click(screen.getByRole('button', { name: /backspace/i }));
    expect(mockBackspaceClick).toHaveBeenCalled();
  });

  test('does not call onCharacterClick when wordIsFull is true', () => {
    render(
      <Keyboard 
        onCharacterClick={mockCharClick}
        onBackspaceClick={mockBackspaceClick}
        onEnterClick={mockEnterClick}
        wordIsFull={true}
      />
    );
    
    fireEvent.click(screen.getByRole('button', { name: 'A' }));
    expect(mockCharClick).not.toHaveBeenCalled();
  });
}); 