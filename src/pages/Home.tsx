import { useWordGame } from "../hooks/useWordGame";
import GameBoard from "../components/GameBoard";
import GameHeader from "../components/GameHeader";
import GameControls from "../components/GameControls";
import { Card } from "@/components/ui/Card";
import { Text } from "@/components/ui/Text";
import { WORD_LENGTH } from "../constants";

interface HomeProps {}

const Home = ({}: HomeProps) => {
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
		<>
			<div className="flex flex-col items-center px-2 sm:px-4">
				<Text as="h1" className="text-4xl font-head font-bold mb-8">
					Word Game
				</Text>

				<Card className="w-full max-w-2xl">
					<div className="flex flex-col items-center justify-center p-2 sm:p-4 md:p-8 relative">
						{/* Game Header with Status */}
						<GameHeader isLoading={isLoading} status={status} />

						{/* Game Board */}
						<Card className="mb-4 sm:mb-8 p-2 sm:p-4">
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
		</>
	);
};

export default Home;
