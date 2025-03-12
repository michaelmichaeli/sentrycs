import { useState } from 'react'
import GameBoard from './components/GameBoard'
import Keyboard from './components/Keyboard'
import { useWordGame } from './hooks/useWordGame'
import { WordStatus } from './hooks/useWordGame'
import { FiHelpCircle, FiChevronDown, FiChevronUp, FiX } from 'react-icons/fi'

// Define the word length as a constant for better maintainability
const WORD_LENGTH = 5;

function App() {
  const { 
    word, 
    status, 
    isLoading,
    handleAddCharacter, 
    handleRemoveCharacter, 
    handleCheckWord,
    resetGame 
  } = useWordGame(WORD_LENGTH);
  
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 relative">
      <h1 className="text-3xl font-bold mb-6">Word Game</h1>
      
      {/* Fixed height status message container */}
      <div className="h-6 mb-4 flex items-center justify-center">
        {status === WordStatus.VALID && (
          <div className="text-green-600 font-medium">
            Great job! That's a valid word.
          </div>
        )}
        {status === WordStatus.INVALID && (
          <div className="text-red-600 font-medium">
            Sorry, that's not a valid word. Try again!
          </div>
        )}
        {isLoading && (
          <div className="text-blue-600 font-medium">
            Checking if this word exists...
          </div>
        )}
      </div>
      
      <div className="mb-8">
        <GameBoard word={word} status={status} maxLength={WORD_LENGTH} />
      </div>
      
      <div className="flex flex-col items-center gap-4 w-full max-w-3xl">
        <Keyboard 
          onCharacterClick={handleAddCharacter}
          onBackspaceClick={handleRemoveCharacter}
          onEnterClick={handleCheckWord}
          wordIsFull={word.length === WORD_LENGTH}
          isLoading={isLoading}
        />
        <button 
          onClick={resetGame}
          className="px-4 py-2 bg-red-500 text-white rounded font-semibold hover:bg-red-600 transition-colors mt-2"
          disabled={isLoading}
        >
          Reset Game
        </button>
      </div>
      
      {/* Floating Help Button */}
      <button 
        onClick={toggleInstructions}
        className="fixed top-4 right-4 bg-gray-800 text-white p-2 rounded-md flex items-center z-10"
        aria-label="Toggle instructions"
      >
        <FiHelpCircle className="mr-1" />
        <span>Help</span>
        {showInstructions ? <FiChevronDown className="ml-1" /> : <FiChevronUp className="ml-1" />}
      </button>
      
      {/* Floating Help Panel */}
      {showInstructions && (
        <div className="fixed top-16 right-4 bg-gray-800 text-white p-4 rounded-md shadow-lg w-64 z-20">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">How to Play</h2>
            <button 
              onClick={toggleInstructions}
              className="text-gray-300 hover:text-white"
              aria-label="Close instructions"
            >
              <FiX />
            </button>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-left">
            <li>Enter a {WORD_LENGTH}-letter English word using the keyboard below</li>
            <li>Press <span className="font-semibold">ENTER</span> to check if your word exists in the dictionary</li>
            <li>If the word is valid, the border will turn green</li>
            <li>If the word is invalid, the border will turn red</li>
            <li>Use the <span className="font-semibold">Backspace</span> button to delete letters</li>
            <li>Press <span className="font-semibold">Reset Game</span> to start over</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default App 