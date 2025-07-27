import { css } from 'styled-components';

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
