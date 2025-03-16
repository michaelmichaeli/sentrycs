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

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/word-game.git
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

```
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

- `ADD_CHARACTER`: Add a letter to the word
- `REMOVE_CHARACTER`: Remove the last letter
- `CHECK_WORD`: Validate the word
- `RESET_GAME`: Start a new game

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- [Free Dictionary API](https://dictionaryapi.dev/) for word validation
- [Radix UI](https://www.radix-ui.com/) for accessible UI primitives
- [React Icons](https://react-icons.github.io/react-icons/) for beautiful icons
