import { useState } from 'react'
import GameBoard from './components/GameBoard'
import Keyboard from './components/Keyboard'
import { useWordGame } from './hooks/useWordGame'

function App() {
  const { 
    word, 
    status, 
    handleAddCharacter, 
    handleRemoveCharacter, 
    handleCheckWord 
  } = useWordGame(5); // 5 is the word length

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      <h1 className="text-3xl font-bold">Word Game</h1>
      <GameBoard word={word} status={status} />
      <Keyboard 
        onCharacterClick={handleAddCharacter}
        onBackspaceClick={handleRemoveCharacter}
        onEnterClick={handleCheckWord}
        wordIsFull={word.length === 5}
      />
    </div>
  )
}

export default App 