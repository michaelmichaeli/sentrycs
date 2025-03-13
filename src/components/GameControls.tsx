import Keyboard from "./Keyboard";
import { Button } from "@/components/ui/Button";

interface GameControlsProps {
  onAddCharacter: (char: string) => void;
  onRemoveCharacter: () => void;
  onCheckWord: () => void;
  onResetGame: () => void;
  wordLength: number;
  currentWordLength: number;
  isLoading: boolean;
}

const GameControls = ({
  onAddCharacter,
  onRemoveCharacter,
  onCheckWord,
  onResetGame,
  wordLength,
  currentWordLength,
  isLoading
}: GameControlsProps) => {
  // Determine if Reset Game button should be disabled
  const isResetDisabled = isLoading || currentWordLength === 0;

  // Get Reset button style based on disabled state
  const getResetButtonStyle = () => {
    if (isResetDisabled) {
      return 'w-full px-4 py-2 mt-2 bg-gray-400 hover:bg-gray-400 cursor-not-allowed';
    }
    return 'w-full px-4 py-2 mt-2 bg-yellow-500 hover:bg-yellow-600';
  };

  return (
    <div className="flex flex-col items-center gap-1 w-full max-w-3xl z-10 relative">
      <Keyboard
        onCharacterClick={onAddCharacter}
        onBackspaceClick={onRemoveCharacter}
        onEnterClick={onCheckWord}
        wordIsFull={currentWordLength === wordLength}
        isLoading={isLoading}
        disableKeys={currentWordLength === wordLength}
        currentWordLength={currentWordLength}
      />
      <Button
        onClick={onResetGame}
        variant="default"
        className={getResetButtonStyle()}
        disabled={isResetDisabled}
      >
        Reset Game
      </Button>
    </div>
  );
};

export default GameControls; 