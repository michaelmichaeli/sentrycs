# Word Game 🎮

A fun and interactive word game where you can challenge your vocabulary! Built with modern web technologies and a beautiful retro-inspired design.

## 🌟 Features

- 🎯 Challenge yourself with 5-letter words
- ⌨️ Interactive on-screen keyboard with retro-style colors
- 🔍 Real-time word validation using the Free Dictionary API
- 🎨 Beautiful and responsive UI with retro-inspired design
- 📱 Mobile-friendly with touch support
- ⚡ Fast and smooth performance
- 🎮 Keyboard support for desktop users

## 🛠️ Technologies Used

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Build Tool**: Vite
- **API**: Free Dictionary API
- **Icons**: React Icons
- **UI Components**: Radix UI primitives
- **Routing**: React Router DOM
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

1. Install dependencies:

```bash
npm install
# or
yarn
```

1. Start the development server:

```bash
npm run dev
# or
yarn dev
```

1. Open your browser and navigate to `http://localhost:5173`

## 🎮 How to Play

1. Type or click letters to form a 5-letter word
1. Use backspace to remove letters if you make a mistake
1. Press Enter when your word is complete
1. The game will check if your word exists:
   - ✅ Green border = Valid word
   - ❌ Red border = Invalid word
1. Press the Reset button to start over

## 🏗️ Project Structure

```text
src/
├── components/     # UI components
├── hooks/         # Custom React hooks
├── pages/         # Page components
├── services/      # API services
├── styles/        # Global styles
└── utils/         # Utility functions
```

## 🧩 Key Components

- `GameBoard`: Displays the word squares
- `Keyboard`: Interactive keyboard interface
- `Square`: Individual character display
- `useWordGame`: Game logic and state management

## 🔄 Game Actions

- Add a letter to the word
- Remove the last letter
- Validate the word
- Start a new game

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
