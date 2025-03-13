import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { FiHelpCircle } from "react-icons/fi";

interface HeaderProps {
  onHelpClick: () => void;
}

const Header = ({ onHelpClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-primary text-black shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">Word Game</Link>
          
          <div className="flex items-center gap-4">
            {/* Desktop navigation */}
            <nav className="hidden md:flex space-x-4">
              <Link to="/" className="hover:text-gray-200 transition-colors">Home</Link>
              <Link to="/about" className="hover:text-gray-200 transition-colors">About</Link>
            </nav>

            {/* Help button - visible on all screens */}
            <Button
              variant="outline"
              className="flex items-center gap-2 border-2 border-black"
              onClick={onHelpClick}
            >
              <FiHelpCircle className="text-black" size={20} />
              <span className="hidden md:inline">How to Play</span>
            </Button>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded focus:outline-none" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-3 pb-2 space-y-2">
            <Link 
              to="/" 
              className="block py-2 px-4 hover:bg-primary-dark rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block py-2 px-4 hover:bg-primary-dark rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header; 