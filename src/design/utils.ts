import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names with Tailwind CSS classes and merges them intelligently
 * to avoid conflicts. This is a utility function for working with conditional
 * classes and class variance authority (cva).
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Converts a pixel value to a rem value based on a 16px base
 * @param px - The pixel value to convert
 * @returns The equivalent rem value as a string
 */
export function pxToRem(px: number): string {
  return `${px / 16}rem`;
}

/**
 * Generates a responsive font size with fluid scaling between min and max viewport widths
 * @param minSize - The minimum font size in pixels
 * @param maxSize - The maximum font size in pixels
 * @param minWidth - The minimum viewport width in pixels (default: 320)
 * @param maxWidth - The maximum viewport width in pixels (default: 1280)
 * @returns A CSS clamp function as a string
 */
export function fluidType(
  minSize: number,
  maxSize: number,
  minWidth: number = 320,
  maxWidth: number = 1280
): string {
  const vwCalc = (maxSize - minSize) / (maxWidth - minWidth) * 100;
  return `clamp(${pxToRem(minSize)}, ${pxToRem(minSize)} + ${vwCalc}vw, ${pxToRem(maxSize)})`;
}

/**
 * Creates a color with variable opacity
 * @param hexColor - The base color in hex format
 * @param opacity - The opacity value between 0 and 1
 * @returns A rgba color string
 */
export function withOpacity(hexColor: string, opacity: number): string {
  // Convert hex to rgb
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
} 