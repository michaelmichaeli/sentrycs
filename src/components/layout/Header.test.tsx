import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

const renderHeader = (props: { onHelpClick: () => void }) => {
  return render(
    <BrowserRouter>
      <Header {...props} />
    </BrowserRouter>
  );
};

describe('Header', () => {
  const mockHelpClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders logo and navigation links', () => {
    renderHeader({ onHelpClick: mockHelpClick });
    
    expect(screen.getByText('Word Game')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  test('renders help button with correct text', () => {
    renderHeader({ onHelpClick: mockHelpClick });
    
    const helpButton = screen.getByRole('button', { name: /how to play/i });
    expect(helpButton).toBeInTheDocument();
  });

  test('calls onHelpClick when help button is clicked', () => {
    renderHeader({ onHelpClick: mockHelpClick });
    
    const helpButton = screen.getByRole('button', { name: /how to play/i });
    fireEvent.click(helpButton);
    expect(mockHelpClick).toHaveBeenCalledTimes(1);
  });

  test('toggles mobile menu when menu button is clicked', () => {
    renderHeader({ onHelpClick: mockHelpClick });
    
    // Mobile menu should be hidden initially
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
    
    // Click menu button
    const menuButton = screen.getByLabelText('Toggle menu');
    fireEvent.click(menuButton);
    
    // Mobile menu should be visible
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    
    // Click menu button again
    fireEvent.click(menuButton);
    
    // Mobile menu should be hidden again
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });

  test('closes mobile menu when a link is clicked', () => {
    renderHeader({ onHelpClick: mockHelpClick });
    
    // Open mobile menu
    const menuButton = screen.getByLabelText('Toggle menu');
    fireEvent.click(menuButton);
    
    // Click a link in the mobile menu
    const homeLink = screen.getAllByText('Home')[1]; // Get the mobile menu link
    fireEvent.click(homeLink);
    
    // Mobile menu should be hidden
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });
}); 