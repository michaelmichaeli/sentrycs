import { render, screen } from '@testing-library/react';
import StatusAlert from './StatusAlert';
import { WordStatus } from '../hooks/useWordGame';

describe('StatusAlert', () => {
  test('renders loading message when isLoading is true', () => {
    render(<StatusAlert isLoading={true} status={WordStatus.NEUTRAL} />);
    expect(screen.getByText('Checking if this word exists...')).toBeInTheDocument();
  });

  test('renders success message for valid word', () => {
    render(<StatusAlert isLoading={false} status={WordStatus.VALID} />);
    expect(screen.getByText("Great job! That's a valid word.")).toBeInTheDocument();
  });

  test('renders error message for invalid word', () => {
    render(<StatusAlert isLoading={false} status={WordStatus.INVALID} />);
    expect(screen.getByText("Sorry, that's not a valid word. Try again!")).toBeInTheDocument();
  });

  test('renders nothing for neutral status', () => {
    const { container } = render(<StatusAlert isLoading={false} status={WordStatus.NEUTRAL} />);
    expect(container).toBeEmptyDOMElement();
  });

  test('loading state takes precedence over status', () => {
    render(<StatusAlert isLoading={true} status={WordStatus.VALID} />);
    expect(screen.getByText('Checking if this word exists...')).toBeInTheDocument();
    expect(screen.queryByText("Great job! That's a valid word.")).not.toBeInTheDocument();
  });
}); 