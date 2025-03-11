# Word Game

A simple word game built with React, TypeScript, and Tailwind CSS.

## Features

- Type words using the on-screen keyboard
- Check if words exist in the English dictionary
- Visual feedback for valid and invalid words
- Backspace to remove characters
- Enter to check word validity

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- Free Dictionary API
- Jest and React Testing Library for testing

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Running Tests

The project includes comprehensive tests for all components, hooks, and services. To run the tests:

```bash
npm test
# or
yarn test
```

## How to Play

1. Click on letter buttons to add characters to the word
2. Click backspace to remove the last character
3. When all squares are filled, click enter to check if the word exists
4. If the word exists, the squares will turn green
5. If the word doesn't exist, the squares will turn red

## Implementation Details

The game uses a custom event emitter/listener system (`MyActionListener`) to manage game state and actions. This allows for a clean separation of concerns between UI components and game logic.

### Key Components

- `GameBoard`: Displays the word squares
- `Keyboard`: Provides the virtual keyboard interface
- `Square`: Represents a single character in the word
- `useWordGame`: Custom hook for managing game state and logic

### Event Actions

- `ADD_CHARACTER`: Add a character to the word
- `REMOVE_CHARACTER`: Remove the last character
- `CHECK_WORD`: Check if the word exists in the dictionary
- `RESET_GAME`: Reset the game state
