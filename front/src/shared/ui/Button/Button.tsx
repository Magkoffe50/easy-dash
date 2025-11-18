'use client';

import React, { forwardRef } from 'react';
import MuiButton from '@mui/material/Button';
import type { ButtonProps as MuiButtonProps } from '@mui/material/Button';

export interface ButtonProps
  extends Omit<MuiButtonProps, 'variant' | 'size' | 'color'> {
  children: React.ReactNode;
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'outlined'
    | 'contained'
    | 'text'
    | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', size = 'md', color, ...props }, ref) => {
    const muiVariant =
      variant === 'outline' || variant === 'outlined'
        ? 'outlined'
        : variant === 'contained'
        ? 'contained'
        : variant === 'text'
        ? 'text'
        : 'contained';

    const muiSize =
      size === 'sm' || size === 'small'
        ? 'small'
        : size === 'lg' || size === 'large'
        ? 'large'
        : 'medium';

    const muiColor =
      color ||
      (variant === 'secondary'
        ? 'secondary'
        : variant === 'danger'
        ? 'error'
        : 'primary');

    return (
      <MuiButton
        ref={ref}
        variant={muiVariant}
        size={muiSize}
        color={muiColor}
        sx={{
          textTransform: 'none',
          borderRadius: 2,
          fontWeight: 500,
          ...props.sx,
        }}
        {...props}
      >
        {children}
      </MuiButton>
    );
  },
);

Button.displayName = 'Button';
