// Export all design tokens
export * from './tokens';

// Export all component variants
export * from './components';

// Export all design utilities
export * from './utils';

// Export all design constants
export * from './constants';

// Import tokens
import { 
  colors, 
  typography, 
  spacing, 
  borderRadius, 
  shadows, 
  grid, 
  animation, 
  zIndex, 
  breakpoints 
} from './tokens';

// Design system theme object that combines all tokens
export const theme = {
  // Re-export tokens for convenience
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  grid,
  animation,
  zIndex,
  breakpoints,
};

// Export default theme
export default theme; 