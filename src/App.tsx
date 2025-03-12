import { useState, useMemo, useRef } from "react";
import GameBoard from "./components/GameBoard";
import Keyboard from "./components/Keyboard";
import { useWordGame } from "./hooks/useWordGame";
import { WordStatus } from "./hooks/useWordGame";
import { FiHelpCircle, FiChevronDown, FiChevronUp, FiX } from "react-icons/fi";
import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import { Alert } from "@/components/ui/Alert";
import { Card } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";

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
		resetGame,
	} = useWordGame(WORD_LENGTH);
	
	// Track the open state of the accordion
	const [openAccordion, setOpenAccordion] = useState<string | undefined>(undefined);

	// Function to determine which alert to show
	const renderAlert = () => {
		if (isLoading) {
			return (
				<Alert variant="default" className="text-blue-600 font-medium">
					Checking if this word exists...
				</Alert>
			);
		} else if (status === WordStatus.VALID) {
			return (
				<Alert status="success" className="text-green-600 font-medium">
					Great job! That's a valid word.
				</Alert>
			);
		} else if (status === WordStatus.INVALID) {
			return (
				<Alert status="error" className="text-red-600 font-medium">
					Sorry, that's not a valid word. Try again!
				</Alert>
			);
		}
		return null;
	};

	// Generate a random background color for the How-to-Play section
	const helpPanelBgColor = useMemo(() => {
		const colors = [
			'bg-pink-400',
			'bg-purple-400',
			'bg-blue-400',
			'bg-cyan-400',
			'bg-teal-400',
			'bg-green-400',
			'bg-yellow-400',
			'bg-orange-400',
			'bg-red-400',
		];
		const randomIndex = Math.floor(Math.random() * colors.length);
		return colors[randomIndex];
	}, []);

	// Determine if Reset Game button should be disabled
	const isResetDisabled = isLoading || word.length === 0;

	// Get Reset button style based on disabled state
	const getResetButtonStyle = () => {
		if (isResetDisabled) {
			return 'w-full px-4 py-2 mt-2 bg-gray-400 hover:bg-gray-400 cursor-not-allowed';
		}
		return 'w-full px-4 py-2 mt-2 bg-yellow-500 hover:bg-yellow-600';
	};

	return (
		<Card>
			{/* Help Panel - Moved outside the main container to be fixed to viewport */}
			<div className="fixed top-4 right-4 z-50">
				<Card className={`p-4 shadow-md w-64 border-2 border-black ${helpPanelBgColor} text-white transition-all duration-300 ease-in-out`}>
					<div className="flex gap-4 items-center mb-4 ">
						<FiHelpCircle />
						<Text className="text-xl font-head font-semibold">
							How to Play
						</Text>
					</div>
					<Accordion 
						type="single" 
						collapsible
						value={openAccordion}
						onValueChange={setOpenAccordion}
					>
						<Accordion.Item value="instructions">
							<Accordion.Header className="text-white">
								Instructions
							</Accordion.Header>
							<Accordion.Content>
								<ul className="list-disc pl-5 space-y-2 text-left">
									<li>
										Enter a {WORD_LENGTH}-letter English word using the keyboard
										below
									</li>
									<li>
										Press <span className="font-semibold">ENTER</span> to check if
										your word exists in the dictionary
									</li>
									<li>If the word is valid, the border will turn green</li>
									<li>If the word is invalid, the border will turn red</li>
									<li>
										Use the <span className="font-semibold">Backspace</span>{" "}
										button to delete letters
									</li>
									<li>
										Press <span className="font-semibold">Reset Game</span> to
										start over
									</li>
								</ul>
							</Accordion.Content>
						</Accordion.Item>
					</Accordion>
				</Card>
			</div>

			<div className="flex flex-col items-center justify-center p-8 relative">
				<Text as="h1" className="text-3xl font-head font-bold mb-6">
					Word Game
				</Text>

				{/* Fixed height status message container */}
				<div className="h-6 mb-8 flex items-center justify-center">
					{renderAlert()}
				</div>

				<Card className="mb-8 p-4">
					<GameBoard word={word} status={status} maxLength={WORD_LENGTH} />
				</Card>

				<div className="flex flex-col items-center gap-1 w-full max-w-3xl z-10 relative">
					<Keyboard
						onCharacterClick={handleAddCharacter}
						onBackspaceClick={handleRemoveCharacter}
						onEnterClick={handleCheckWord}
						wordIsFull={word.length === WORD_LENGTH}
						isLoading={isLoading}
						disableKeys={word.length === WORD_LENGTH}
						currentWordLength={word.length}
					/>
					<Button
						onClick={resetGame}
						variant="default"
						className={getResetButtonStyle()}
						disabled={isResetDisabled}
					>
						Reset Game
					</Button>
				</div>
			</div>
		</Card>
	);
}

export default App;
