import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';

const renderFooter = () => {
  return render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
};

describe('Footer', () => {
  test('renders copyright notice with current year', () => {
    renderFooter();
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} Word Game. All rights reserved.`)).toBeInTheDocument();
  });

  test('renders API credit with link', () => {
    renderFooter();
    const apiLink = screen.getByText('Free Dictionary API');
    expect(apiLink).toBeInTheDocument();
    expect(apiLink).toHaveAttribute('href', 'https://dictionaryapi.dev/');
    expect(apiLink).toHaveAttribute('target', '_blank');
    expect(apiLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('renders navigation links', () => {
    renderFooter();
    const homeLink = screen.getByText('Home');
    const aboutLink = screen.getByText('About');
    
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
    expect(aboutLink).toHaveAttribute('href', '/about');
  });
}); 