import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">
              &copy; {currentYear} Word Game. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Powered by <a href="https://dictionaryapi.dev/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Free Dictionary API</a>
            </p>
          </div>
          
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 