import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-8">
      <div className="container max-w-6xl mx-auto flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-between items-center">
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/yourusername/word-game" className="text-primary-500 hover:text-primary-400">GitHub</a>
          <Link to="/about" className="text-primary-500 hover:text-primary-400" data-discover>About</Link>
          <Link to="/" className="text-primary-500 hover:text-primary-400" data-discover>Home</Link>
        </div>
        <div className="flex flex-col items-center lg:items-end space-y-2">
          <p className="text-gray-300 text-sm">
            Built with <a href="https://dictionaryapi.dev/" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-400">Free Dictionary API</a>
          </p>
          <p className="text-gray-300 text-sm">
            © {currentYear} Word Game. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 