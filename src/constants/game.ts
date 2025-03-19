// Game settings
export const WORD_LENGTH = 5;

// Keyboard layout
export const KEYBOARD_ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
] as const;

// Keyboard styles
export const RETRO_COLORS = [
  'bg-pink-400 hover:bg-pink-500',
  'bg-purple-400 hover:bg-purple-500',
  'bg-blue-400 hover:bg-blue-500',
  'bg-cyan-400 hover:bg-cyan-500',
  'bg-teal-400 hover:bg-teal-500',
  'bg-green-400 hover:bg-green-500',
  'bg-yellow-400 hover:bg-yellow-500',
  'bg-orange-400 hover:bg-orange-500',
  'bg-red-400 hover:bg-red-500',
] as const;

export const DISABLED_STYLE = 'bg-gray-200 hover:bg-gray-200 cursor-not-allowed shadow-md hover:shadow-md'; 