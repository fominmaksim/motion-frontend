import styled from 'styled-components';
import { TypographyVariant, TypographyColors, typographyStyles } from './typographyStyles';
import type { TypographyVariantType, TypographyColorType } from './typographyStyles';

// Flexible Typography component with enum-based variants and color support
interface TypographyProps {
  variant?: TypographyVariantType;
  children: React.ReactNode;
  className?: string;
  color?: TypographyColorType | string;
}

export const Typography: React.FC<TypographyProps> = ({ 
  variant = TypographyVariant.BODY1, 
  children, 
  className,
  color
}) => {
  const StyledTypography = styled.div<{ variant: TypographyVariantType; color?: TypographyColorType | string }>`
    ${({ variant }) => typographyStyles[variant]}
    ${({ color }) => color && `color: ${color};`}
    margin: 0;
    padding: 0;
  `;

  return (
    <StyledTypography 
      variant={variant} 
      className={className}
      color={color}
    >
      {children}
    </StyledTypography>
  );
};

export { TypographyVariant, TypographyColors };
