'use client';

import React from 'react';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';

interface ButtonProps extends Omit<MuiButtonProps, 'variant' | 'size'> {
  children: React.ReactNode;
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'outlined'
    | 'contained'
    | 'text';
  size?: 'sm' | 'md' | 'lg' | 'small' | 'medium' | 'large';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  ...props
}) => {
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
  const muiColor = variant === 'secondary' ? 'secondary' : 'primary';

  return (
    <MuiButton variant={muiVariant} size={muiSize} color={muiColor} {...props}>
      {children}
    </MuiButton>
  );
};
