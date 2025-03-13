import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black py-8">
      <div className="container max-w-6xl mx-auto flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-between items-center">
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/yourusername/word-game" className="text-primary-500 hover:text-primary-400">GitHub</a>
          <Link to="/about" className="text-primary-500 hover:text-primary-400">About</Link>
          <Link to="/" className="text-primary-500 hover:text-primary-400">Home</Link>
        </div>
        <p className="text-gray-300 text-sm">
          Built with <a href="https://dictionaryapi.dev/" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-400">Free Dictionary API</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer; 