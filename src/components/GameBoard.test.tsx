import React from 'react';
import { render, screen } from '@testing-library/react';
import GameBoard from './GameBoard';

describe('GameBoard', () => {
  test('renders 5 squares', () => {
    render(<GameBoard word={[]} status="neutral" />);
    
    const squares = screen.getAllByTestId('square');
    expect(squares).toHaveLength(5);
  });

  test('displays characters in squares', () => {
    render(<GameBoard word={['H', 'E', 'L', 'L', 'O']} status="neutral" />);
    
    const squares = screen.getAllByTestId('square');
    expect(squares[0]).toHaveTextContent('H');
    expect(squares[1]).toHaveTextContent('E');
    expect(squares[2]).toHaveTextContent('L');
    expect(squares[3]).toHaveTextContent('L');
    expect(squares[4]).toHaveTextContent('O');
  });

  test('applies green border for valid status', () => {
    render(<GameBoard word={['H', 'E', 'L', 'L', 'O']} status="valid" />);
    
    const squares = screen.getAllByTestId('square');
    squares.forEach((square: HTMLElement) => {
      expect(square).toHaveClass('border-green-500');
    });
  });

  test('applies red border for invalid status', () => {
    render(<GameBoard word={['H', 'E', 'L', 'L', 'O']} status="invalid" />);
    
    const squares = screen.getAllByTestId('square');
    squares.forEach((square: HTMLElement) => {
      expect(square).toHaveClass('border-red-500');
    });
  });

  test('applies gray border for neutral status', () => {
    render(<GameBoard word={['H', 'E', 'L', 'L', 'O']} status="neutral" />);
    
    const squares = screen.getAllByTestId('square');
    squares.forEach((square: HTMLElement) => {
      expect(square).toHaveClass('border-gray-400');
    });
  });

  test('handles partial word correctly', () => {
    render(<GameBoard word={['H', 'E', 'L']} status="neutral" />);
    
    const squares = screen.getAllByTestId('square');
    expect(squares[0]).toHaveTextContent('H');
    expect(squares[1]).toHaveTextContent('E');
    expect(squares[2]).toHaveTextContent('L');
    expect(squares[3]).toHaveTextContent('');
    expect(squares[4]).toHaveTextContent('');
  });
}); 