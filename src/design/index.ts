// Export all design tokens
export * from './tokens';

// Export all component variants
export * from './components';

// Export all design utilities
export * from './utils';

// Export all design constants
export * from './constants';

// Design system theme object that combines all tokens
export const theme = {
  // Re-export tokens for convenience
  colors: require('./tokens').colors,
  typography: require('./tokens').typography,
  spacing: require('./tokens').spacing,
  borderRadius: require('./tokens').borderRadius,
  shadows: require('./tokens').shadows,
  grid: require('./tokens').grid,
  animation: require('./tokens').animation,
  zIndex: require('./tokens').zIndex,
  breakpoints: require('./tokens').breakpoints,
};

// Export default theme
export default theme; 