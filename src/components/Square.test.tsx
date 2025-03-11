import React from 'react';
import { render, screen } from '@testing-library/react';
import Square from './Square';

describe('Square', () => {
  test('renders with the provided character', () => {
    render(<Square character="A" borderColorClass="border-gray-400" />);
    expect(screen.getByText('A')).toBeInTheDocument();
  });

  test('renders empty when no character is provided', () => {
    render(<Square character="" borderColorClass="border-gray-400" />);
    const square = screen.getByTestId('square');
    expect(square).toBeInTheDocument();
    expect(square).toHaveTextContent('');
  });

  test('applies the provided border color class', () => {
    render(<Square character="A" borderColorClass="border-green-500" />);
    expect(screen.getByText('A')).toHaveClass('border-green-500');
  });

  test('converts character to uppercase', () => {
    render(<Square character="a" borderColorClass="border-gray-400" />);
    expect(screen.getByText('A')).toBeInTheDocument();
  });
}); 