import { ReactNode } from "react";
import { ErrorInfo } from "react";

// Action types from useWordGame
export enum ActionType {
  ADD_CHARACTER = 'ADD_CHARACTER',
  REMOVE_CHARACTER = 'REMOVE_CHARACTER',
  CHECK_WORD = 'CHECK_WORD',
  CHECK_WORD_COMPLETE = 'CHECK_WORD_COMPLETE',
  RESET_GAME = 'RESET_GAME'
}

// Word status types from useWordGame
export enum WordStatus {
  VALID = 'valid',
  INVALID = 'invalid',
  NEUTRAL = 'neutral'
}

// Component Props
export interface SquareProps {
  character?: string;
  borderColor?: string;
  borderColorClass?: string;
}

export interface StatusAlertProps {
  isLoading: boolean;
  status: WordStatus;
}

export interface GameHeaderProps {
  isLoading: boolean;
  status: WordStatus;
}

export interface GameBoardProps {
  word: string[];
  status: WordStatus;
  maxLength: number;
}

export interface GameControlsProps {
  onAddCharacter: (char: string) => void;
  onRemoveCharacter: () => void;
  onCheckWord: () => void;
  onResetGame: () => void;
  wordLength: number;
  currentWordLength: number;
  isLoading: boolean;
}

export interface KeyboardProps {
  onCharacterClick: (char: string) => void;
  onBackspaceClick: () => void;
  onEnterClick: () => void;
  onResetGame: () => void;
  wordIsFull: boolean;
  isLoading?: boolean;
  disableKeys?: boolean;
  currentWordLength?: number;
}

// Page Props
export interface HomeProps {}

export interface AboutProps {}

// Layout Props
export interface LayoutProps {
  children: ReactNode;
}

export interface HeaderProps {}

export interface HelpPanelProps {
  wordLength: number;
  isOpen: boolean;
  onClose: () => void;
}

// Hook Props
export interface UseKeyboardProps {
  onCharacterClick: (char: string) => void;
  onBackspaceClick: () => void;
  onEnterClick: () => void;
  onResetGame: () => void;
  wordIsFull: boolean;
  isLoading?: boolean;
  disableKeys?: boolean;
  currentWordLength?: number;
}

// Error Boundary Types
export interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export interface ErrorDialogProps {
  error: Error | null;
  open: boolean;
  onClose: () => void;
} 