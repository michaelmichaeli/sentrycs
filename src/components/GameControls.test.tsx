import { render, screen, fireEvent } from '@testing-library/react';
import GameControls from './GameControls';

describe('GameControls', () => {
  const mockProps = {
    onAddCharacter: jest.fn(),
    onRemoveCharacter: jest.fn(),
    onCheckWord: jest.fn(),
    onResetGame: jest.fn(),
    wordLength: 5,
    currentWordLength: 3,
    isLoading: false
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders keyboard component', () => {
    render(<GameControls {...mockProps} />);
    // Check for some keyboard buttons
    expect(screen.getByRole('button', { name: 'A' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Z' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'ENTER' })).toBeInTheDocument();
  });

  test('passes correct props to keyboard', () => {
    render(<GameControls {...mockProps} />);
    
    // Test character button
    fireEvent.click(screen.getByRole('button', { name: 'A' }));
    expect(mockProps.onAddCharacter).toHaveBeenCalledWith('A');
    
    // Test backspace button
    fireEvent.click(screen.getByLabelText('Backspace'));
    expect(mockProps.onRemoveCharacter).toHaveBeenCalled();
    
    // Test enter button
    fireEvent.click(screen.getByRole('button', { name: 'ENTER' }));
    expect(mockProps.onCheckWord).toHaveBeenCalled();
    
    // Test reset button
    fireEvent.click(screen.getByRole('button', { name: 'Reset Game' }));
    expect(mockProps.onResetGame).toHaveBeenCalled();
  });

  test('disables keyboard when word is full', () => {
    render(<GameControls {...mockProps} wordLength={3} currentWordLength={3} />);
    
    const letterButton = screen.getByRole('button', { name: 'A' });
    expect(letterButton).toBeDisabled();
  });

  test('disables controls when loading', () => {
    render(<GameControls {...mockProps} isLoading={true} />);
    
    const letterButton = screen.getByRole('button', { name: 'A' });
    const enterButton = screen.getByRole('button', { name: 'ENTER' });
    const backspaceButton = screen.getByLabelText('Backspace');
    const resetButton = screen.getByRole('button', { name: 'Reset Game' });
    
    expect(letterButton).toBeDisabled();
    expect(enterButton).toBeDisabled();
    expect(backspaceButton).toBeDisabled();
    expect(resetButton).toBeDisabled();
  });
}); 