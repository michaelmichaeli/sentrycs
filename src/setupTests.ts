import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { configure } from '@testing-library/react';

// Configure testing library
configure({
  // Disable default hydration warning in tests
  throwSuggestions: true,
  // Remove act() warnings when using async utilities
  asyncUtilTimeout: 1000,
}); 