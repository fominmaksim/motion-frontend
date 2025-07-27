import styled from 'styled-components';
import { TypographyVariant, typographyStyles } from './typographyStyles';
import type { TypographyVariantType } from './typographyStyles';

// Flexible Typography component with enum-based variants
interface TypographyProps {
  variant?: TypographyVariantType;
  children: React.ReactNode;
  className?: string;
}

export const Typography: React.FC<TypographyProps> = ({ 
  variant = TypographyVariant.BODY1, 
  children, 
  className 
}) => {
  const StyledTypography = styled.div<{ variant: TypographyVariantType }>`
    ${({ variant }) => typographyStyles[variant]}
    margin: 0;
    padding: 0;
  `;

  return (
    <StyledTypography 
      variant={variant} 
      className={className}
    >
      {children}
    </StyledTypography>
  );
};

export { TypographyVariant };
