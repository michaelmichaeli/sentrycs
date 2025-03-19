import { useWordGame } from "../hooks/useWordGame";
import GameBoard from "../components/GameBoard";
import GameHeader from "../components/GameHeader";
import GameControls from "../components/GameControls";
import { Card } from "@/components/ui/Card";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { WORD_LENGTH } from "@/constants/game";
import { actionListener } from "../MyActionListener";
import { FiTerminal } from "react-icons/fi";
import { useCallback } from "react";
import { cn } from "@/design/utils";
import { containerVariants, gameContainerVariants } from "@/design/components";

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

	const memoizedHandleAddCharacter = useCallback((char: string) => {
		handleAddCharacter(char);
	}, [handleAddCharacter]);

	const memoizedHandleRemoveCharacter = useCallback(() => {
		handleRemoveCharacter();
	}, [handleRemoveCharacter]);

	const memoizedHandleCheckWord = useCallback(() => {
		handleCheckWord();
	}, [handleCheckWord]);

	const memoizedResetGame = useCallback(() => {
		resetGame();
	}, [resetGame]);

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
			<div className={containerVariants({ padding: "md", gap: "lg" })}>
				<Text as="h1" className="text-4xl font-bold">
					Word Game
				</Text>

				<Card className="w-full max-w-2xl">
					<div className={gameContainerVariants({ padding: "lg" })}>
						<GameHeader isLoading={isLoading} status={status} />

						<Card className="mb-4 sm:mb-8 p-2 sm:p-4">
							<GameBoard word={word} status={status} maxLength={WORD_LENGTH} />
						</Card>

						<GameControls
							onAddCharacter={memoizedHandleAddCharacter}
							onRemoveCharacter={memoizedHandleRemoveCharacter}
							onCheckWord={memoizedHandleCheckWord}
							onResetGame={memoizedResetGame}
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
