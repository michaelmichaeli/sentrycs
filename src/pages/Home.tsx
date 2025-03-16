import { useWordGame } from "../hooks/useWordGame";
import GameBoard from "../components/GameBoard";
import GameHeader from "../components/GameHeader";
import GameControls from "../components/GameControls";
import { Card } from "@/components/ui/Card";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { WORD_LENGTH } from "../constants";
import { actionListener } from "../MyActionListener";
import { FiTerminal } from "react-icons/fi";

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

	const testActionListener = () => {
		actionListener.registerListener("PRINT", (data: unknown) => {
			if (typeof data === 'string') {
				console.log(`Don't tell me what I ${data} or ${data}'t do`);
			}
		});
		actionListener.registerListener("PRINT", (data: unknown) => {
			if (typeof data === 'string') {
				console.log(`I eat pickles right of the ${data}`);
			}
		});
		actionListener.emit("PRINT", "Can");
		actionListener.removeListener("PRINT");
		actionListener.emit("PRINT", "Can");
	};

	return (
		<>
			<div className="flex flex-col items-center px-2 sm:px-4">
				<Text as="h1" className="text-4xl font-bold mb-8">
					Word Game
				</Text>

				<Card className="w-full max-w-2xl">
					<div className="flex flex-col items-center justify-center p-2 sm:p-4 md:p-8 relative">
						<GameHeader isLoading={isLoading} status={status} />

						<Card className="mb-4 sm:mb-8 p-2 sm:p-4">
							<GameBoard word={word} status={status} maxLength={WORD_LENGTH} />
						</Card>

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

			<div className="mt-4 flex justify-center w-full">
				<Button
					onClick={testActionListener}
					className="bg-red-500 hover:bg-red-600 text-white flex items-center gap-2"
				>
					<FiTerminal size={18} className="flex-shrink-0" />
					<span>Test My Action Listener Handling (Look at the console)</span>
				</Button>
			</div>
		</>
	);
};

export default Home;
