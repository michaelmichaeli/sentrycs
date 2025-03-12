import React from 'react';
import { render, screen } from '@testing-library/react';
import Key from './Key';

describe('Key', () => {
  test('renders with the provided character', () => {
    render(<Key character="A" borderColorClass="border-gray-400" />);
    expect(screen.getByText('A')).toBeInTheDocument();
  });

  test('renders empty when no character is provided', () => {
    render(<Key character="" borderColorClass="border-gray-400" />);
    const key = screen.getByTestId('key');
    expect(key).toBeInTheDocument();
    expect(key).toHaveTextContent('');
  });

  test('applies the provided border color class', () => {
    render(<Key character="A" borderColorClass="border-green-500" />);
    expect(screen.getByText('A')).toHaveClass('border-green-500');
  });

  test('converts character to uppercase', () => {
    render(<Key character="a" borderColorClass="border-gray-400" />);
    expect(screen.getByText('A')).toBeInTheDocument();
  });
}); 