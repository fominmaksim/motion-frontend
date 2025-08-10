# Typography Color System

The Typography component now supports a comprehensive color system with predefined color constants and custom color values.

## 🎨 **Predefined Colors**

### Primary Colors
```typescript
import { TypographyColors } from '../components/Typography/Typography';

<Typography color={TypographyColors.PRIMARY}>Primary Text</Typography>
<Typography color={TypographyColors.PRIMARY_DARK}>Dark Primary</Typography>
<Typography color={TypographyColors.PRIMARY_LIGHT}>Light Primary</Typography>
```

### Semantic Colors
```typescript
<Typography color={TypographyColors.SUCCESS}>Success Message</Typography>
<Typography color={TypographyColors.WARNING}>Warning Message</Typography>
<Typography color={TypographyColors.ERROR}>Error Message</Typography>
```

### Neutral Colors
```typescript
<Typography color={TypographyColors.WHITE}>White Text</Typography>
<Typography color={TypographyColors.BLACK}>Black Text</Typography>
<Typography color={TypographyColors.GRAY_500}>Medium Gray</Typography>
<Typography color={TypographyColors.GRAY_900}>Dark Gray</Typography>
```

### Text Colors
```typescript
<Typography color={TypographyColors.TEXT_PRIMARY}>Main Text</Typography>
<Typography color={TypographyColors.TEXT_SECONDARY}>Secondary Text</Typography>
<Typography color={TypographyColors.TEXT_DISABLED}>Disabled Text</Typography>
<Typography color={TypographyColors.TEXT_INVERSE}>Inverse Text</Typography>
```

## 🔧 **Custom Colors**

You can also use any custom color value:

```typescript
// Hex colors
<Typography color="#ff6b6b">Custom Red</Typography>

// RGB colors
<Typography color="rgb(255, 107, 107)">Custom Red RGB</Typography>

// Named colors
<Typography color="coral">Coral Color</Typography>

// CSS variables
<Typography color="var(--custom-color)">CSS Variable</Typography>
```

## 📱 **Usage Examples**

### Basic Usage
```typescript
import { Typography, TypographyVariant, TypographyColors } from '../components/Typography/Typography';

// With predefined colors
<Typography variant={TypographyVariant.H1} color={TypographyColors.PRIMARY}>
  Welcome to Motion
</Typography>

// With custom colors
<Typography variant={TypographyVariant.BODY1} color="#6366f1">
  Custom colored text
</Typography>
```

### Conditional Colors
```typescript
const getStatusColor = (status: string) => {
  switch (status) {
    case 'success': return TypographyColors.SUCCESS;
    case 'warning': return TypographyColors.WARNING;
    case 'error': return TypographyColors.ERROR;
    default: return TypographyColors.TEXT_SECONDARY;
  }
};

<Typography color={getStatusColor(userStatus)}>
  Status: {userStatus}
</Typography>
```

### Theme Integration
```typescript
const isDarkMode = true;

<Typography 
  color={isDarkMode ? TypographyColors.WHITE : TypographyColors.BLACK}
>
  Adaptive Text Color
</Typography>
```

## 🎯 **Best Practices**

1. **Use predefined colors** for consistency across your app
2. **Reserve semantic colors** for their intended purposes (success, warning, error)
3. **Ensure contrast** - light colors on light backgrounds may not be readable
4. **Test accessibility** - ensure text meets WCAG contrast requirements
5. **Be consistent** - use the same colors for similar UI elements

## 🌈 **Available Color Constants**

```typescript
// Primary
PRIMARY, PRIMARY_DARK, PRIMARY_LIGHT

// Secondary  
SECONDARY, SECONDARY_DARK, SECONDARY_LIGHT

// Semantic
SUCCESS, SUCCESS_DARK, SUCCESS_LIGHT
WARNING, WARNING_DARK, WARNING_LIGHT
ERROR, ERROR_DARK, ERROR_LIGHT

// Neutral
WHITE, BLACK
GRAY_50, GRAY_100, GRAY_200, GRAY_300, GRAY_400
GRAY_500, GRAY_600, GRAY_700, GRAY_800, GRAY_900

// Text
TEXT_PRIMARY, TEXT_SECONDARY, TEXT_DISABLED, TEXT_INVERSE
```

## 🔄 **Migration from Old Usage**

If you were using hardcoded colors, you can now use the predefined constants:

```typescript
// Before
<Typography color="#3b82f6">Text</Typography>

// After
<Typography color={TypographyColors.PRIMARY}>Text</Typography>
```

This makes your code more maintainable and ensures consistency across your application!
