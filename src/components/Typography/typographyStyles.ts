import { css } from 'styled-components';

// Color constants for consistent theming
export const TypographyColors = {
  // Primary colors
  PRIMARY: '#3b82f6',
  PRIMARY_DARK: '#1d4ed8',
  PRIMARY_LIGHT: '#93c5fd',
  
  // Secondary colors
  SECONDARY: '#6b7280',
  SECONDARY_DARK: '#374151',
  SECONDARY_LIGHT: '#d1d5db',
  
  // Success colors
  SUCCESS: '#10b981',
  SUCCESS_DARK: '#059669',
  SUCCESS_LIGHT: '#6ee7b7',
  
  // Warning colors
  WARNING: '#f59e0b',
  WARNING_DARK: '#d97706',
  WARNING_LIGHT: '#fcd34d',
  
  // Error colors
  ERROR: '#ef4444',
  ERROR_DARK: '#dc2626',
  ERROR_LIGHT: '#fca5a5',
  
  // Neutral colors
  WHITE: '#ffffff',
  BLACK: '#000000',
  GRAY_50: '#f9fafb',
  GRAY_100: '#f3f4f6',
  GRAY_200: '#e5e7eb',
  GRAY_300: '#d1d5db',
  GRAY_400: '#9ca3af',
  GRAY_500: '#6b7280',
  GRAY_600: '#4b5563',
  GRAY_700: '#374151',
  GRAY_800: '#1f2937',
  GRAY_900: '#111827',
  
  // Text colors
  TEXT_PRIMARY: '#1a202c',
  TEXT_SECONDARY: '#4a5568',
  TEXT_DISABLED: '#a0aec0',
  TEXT_INVERSE: '#ffffff',
} as const;

export type TypographyColorType = (typeof TypographyColors)[keyof typeof TypographyColors];

// Typography variants const
export const TypographyVariant = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
  BODY1: 'body1',
  BODY2: 'body2',
  CAPTION: 'caption',
  OVERLINE: 'overline',
  BUTTON: 'button',
  SUBTITLE1: 'subtitle1',
  SUBTITLE2: 'subtitle2',
} as const;

export type TypographyVariantType = (typeof TypographyVariant)[keyof typeof TypographyVariant];

// Typography variants with consistent styling
export const typographyStyles = {
  [TypographyVariant.H1]: css`
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: #1a202c;
  `,
  [TypographyVariant.H2]: css`
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: -0.01em;
    color: #1a202c;
  `,
  [TypographyVariant.H3]: css`
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.4;
    color: #2d3748;
  `,
  [TypographyVariant.H4]: css`
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.4;
    color: #2d3748;
  `,
  [TypographyVariant.H5]: css`
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.4;
    color: #2d3748;
  `,
  [TypographyVariant.H6]: css`
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.4;
    color: #2d3748;
  `,
  [TypographyVariant.BODY1]: css`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
    color: #4a5568;
  `,
  [TypographyVariant.BODY2]: css`
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.6;
    color: #4a5568;
  `,
  [TypographyVariant.CAPTION]: css`
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.5;
    color: #718096;
  `,
  [TypographyVariant.OVERLINE]: css`
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #718096;
  `,
  [TypographyVariant.BUTTON]: css`
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    color: inherit;
  `,
  [TypographyVariant.SUBTITLE1]: css`
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.6;
    color: #2d3748;
  `,
  [TypographyVariant.SUBTITLE2]: css`
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.6;
    color: #2d3748;
  `,
} as const;
