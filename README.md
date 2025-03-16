# Word Game 🎮

A fun and interactive word game where you can challenge your vocabulary! Built with modern web technologies and a beautiful retro-inspired design.

![image](https://github.com/user-attachments/assets/09bedf3b-b97d-4e79-a495-25fb06d7ae77)

## 🌟 Features

- 🎯 Challenge yourself with 5-letter words
- ⌨️ Interactive on-screen keyboard with retro-style colors
- 🔍 Real-time word validation using the Free Dictionary API
- 🎨 Beautiful and responsive UI with retro-inspired design
- 📱 Mobile-friendly with touch support
- ⚡ Fast and smooth performance
- 🎮 Keyboard support for desktop users
- 🔄 Event-driven architecture with custom action listener

## 🛠️ Technologies Used

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Build Tool**: Vite
- **API**: Free Dictionary API
- **Icons**: React Icons
- **UI Components**: Radix UI primitives
- **Routing**: React Router DOM
- **State Management**: Custom hooks with action listener pattern
- **Code Quality**: ESLint with TypeScript and React plugins

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/michaelmichaeli/word-game.git
cd word-game
```

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

## 🎮 How to Play

1. Type or click letters to form a 5-letter word
2. Use backspace to remove letters if you make a mistake
3. Press Enter when your word is complete
4. The game will check if your word exists:
   - ✅ Green border = Valid word
   - ❌ Red border = Invalid word
5. Press the Reset button to start over

## 🏗️ Project Structure

```text
src/
├── components/     # UI components
├── hooks/         # Custom React hooks
├── pages/         # Page components
├── services/      # API services
├── types/         # TypeScript type definitions
├── design/        # Design system components
├── assets/        # Static assets
└── MyActionListener.ts # Custom event system
```

## 🧩 Key Components

- `GameBoard`: Displays the word squares
- `Keyboard`: Interactive keyboard interface
- `Square`: Individual character display
- `useWordGame`: Game logic and state management

## 🎛️ Game Architecture

### Action Listener Pattern

The game uses a custom event-driven architecture with an action listener pattern:

1. Components dispatch actions through the `actionListener`
2. The `useWordGame` hook registers listeners for these actions
3. When an action is emitted, the appropriate handler is triggered
4. State updates are propagated back to the UI

### Action Types

```typescript
enum ActionType {
  ADD_CHARACTER = 'ADD_CHARACTER',
  REMOVE_CHARACTER = 'REMOVE_CHARACTER',
  CHECK_WORD = 'CHECK_WORD',
  CHECK_WORD_COMPLETE = 'CHECK_WORD_COMPLETE',
  RESET_GAME = 'RESET_GAME'
}
```

### Word Status

```typescript
enum WordStatus {
  VALID = 'valid',
  INVALID = 'invalid',
  NEUTRAL = 'neutral'
}
```

## 🎣 useWordGame Hook

The `useWordGame` hook is the core of the game logic:

- Manages the current word state as an array of characters
- Handles adding and removing characters
- Validates words against the dictionary API
- Manages loading states during API calls
- Provides methods for game actions (add, remove, check, reset)

Example usage:

```typescript
const { 
  word,
  status,
  isLoading,
  handleAddCharacter,
  handleRemoveCharacter,
  handleCheckWord,
  resetGame
} = useWordGame(5); // 5 is the word length
```

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- [Free Dictionary API](https://dictionaryapi.dev/) for word validation
- [Radix UI](https://www.radix-ui.com/) for accessible UI primitives
- [React Icons](https://react-icons.github.io/react-icons/) for beautiful icons

## 🧪 Code Quality

### Linting

The project uses ESLint for code quality and consistency. To run the linter:

```bash
# Run linting
npm run lint

# Run linting with automatic fixes
npm run lint:fix
```
