# Design System

This directory contains the centralized design system for our application. It provides a single source of truth for design tokens, component variants, and utility functions.

## Structure

- `tokens.ts` - Design tokens (colors, typography, spacing, etc.)
- `components.ts` - Component variant definitions using class-variance-authority
- `utils.ts` - Design utility functions
- `constants.ts` - Type definitions for design system values
- `index.ts` - Exports everything from a single entry point

## Usage

### Importing Design Tokens

```tsx
import { colors, typography, spacing } from '@/design';

// Example usage
const primaryColor = colors.primary[500];
const headingFont = typography.fontFamily.head;
const standardPadding = spacing[4];
```

### Using Type Definitions

```tsx
import { TextVariant, ButtonVariant } from '@/design';

// Type-safe component props
interface MyComponentProps {
  textVariant: TextVariant;  // Will only accept 'default', 'muted', or 'primary'
  buttonVariant: ButtonVariant;  // Will only accept 'default', 'outline', or 'link'
}
```

### Using Component Variants

```tsx
import { buttonVariants, cardVariants } from '@/design';
import { cn } from '@/design/utils';

// Example usage in a component
const MyComponent = ({ className }) => {
  return (
    <button className={cn(
      buttonVariants({ variant: 'outline', size: 'lg' }),
      className
    )}>
      Click Me
    </button>
  );
};
```

### Using Utility Functions

```tsx
import { cn, pxToRem, fluidType } from '@/design/utils';

// Example usage
const className = cn('base-class', conditional && 'conditional-class');
const fontSize = pxToRem(16); // "1rem"
const responsiveSize = fluidType(16, 24); // Fluid typography between 16px and 24px
```

## Benefits

1. **Consistency** - A single source of truth for design tokens and components
2. **Maintainability** - Changes to design elements can be made in one place
3. **Reusability** - Makes it easier to discover and use existing design components
4. **Documentation** - Serves as implicit documentation of the design system
5. **Type Safety** - Type definitions provide type safety and autocompletion

## Best Practices

1. Always import design tokens from `@/design` rather than hardcoding values
2. Use the component variants for consistent styling
3. Use the type definitions for type-safe component props
4. Extend the design system when adding new components or tokens
5. Keep the design system in sync with CSS variables in `index.css` 