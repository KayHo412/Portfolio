import React from 'react';
import * as LucideIcons from 'lucide-react';
import { HelpCircle, LucideProps } from 'lucide-react';

// Type-safe icon name type
export type IconName = keyof typeof LucideIcons;

interface IconProps extends Omit<LucideProps, 'size'> {
  name: IconName | string;
  size?: number;
  color?: string;
  className?: string;
  strokeWidth?: number;
}

// Type guard to check if a string is a valid icon name
function isValidIconName(name: string): name is IconName {
  return name in LucideIcons;
}

/**
 * AppIcon component for rendering Lucide React icons
 * @param name - Icon name from lucide-react library
 * @param size - Icon size in pixels (default: 24)
 * @param color - Icon color (default: currentColor)
 * @param className - Additional CSS classes
 * @param strokeWidth - Stroke width (default: 2)
 * @returns Rendered Lucide icon or HelpCircle fallback
 */
function Icon({
  name,
  size = 24,
  color = "currentColor",
  className = "",
  strokeWidth = 2,
  ...props
}: IconProps): React.ReactElement {
  // Format kebab-case to PascalCase
  const formattedName = typeof name === 'string'
    ? name.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('')
    : name;

  // Validate icon name with type guard
  if (!isValidIconName(formattedName)) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`Icon "${formattedName}" not found in lucide-react`);
    }
    return (
      <HelpCircle
        size={size}
        color="gray"
        strokeWidth={strokeWidth}
        className={className}
        {...props}
      />
    );
  }

  const IconComponent = LucideIcons[formattedName] as React.ComponentType<LucideProps>;

  return (
    <IconComponent
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    />
  );
}

export default Icon;