import { useWordGame } from "../hooks/useWordGame";
import GameBoard from "../components/GameBoard";
import HelpPanel from "../components/HelpPanel";
import GameHeader from "../components/GameHeader";
import GameControls from "../components/GameControls";
import { Card } from "@/components/ui/Card";

// Define the word length as a constant for better maintainability
const WORD_LENGTH = 5;

const Home = () => {
  const {
    word,
    status,
    isLoading,
    handleAddCharacter,
    handleRemoveCharacter,
    handleCheckWord,
    resetGame,
  } = useWordGame(WORD_LENGTH);
  
  return (
    <div className="flex justify-center">
      <Card className="w-full max-w-2xl">
        {/* Help Panel */}
        <HelpPanel wordLength={WORD_LENGTH} />

        <div className="flex flex-col items-center justify-center p-4 md:p-8 relative">
          {/* Game Header with Title and Status */}
          <GameHeader isLoading={isLoading} status={status} />

          {/* Game Board */}
          <Card className="mb-8 p-4">
            <GameBoard word={word} status={status} maxLength={WORD_LENGTH} />
          </Card>

          {/* Game Controls */}
          <GameControls
            onAddCharacter={handleAddCharacter}
            onRemoveCharacter={handleRemoveCharacter}
            onCheckWord={handleCheckWord}
            onResetGame={resetGame}
            wordLength={WORD_LENGTH}
            currentWordLength={word.length}
            isLoading={isLoading}
          />
        </div>
      </Card>
    </div>
  );
};

export default Home; 