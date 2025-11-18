'use client';

import React, { forwardRef } from 'react';
import TextField from '@mui/material/TextField';
import type { TextFieldProps } from '@mui/material/TextField';
import { InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export interface InputProps extends Omit<TextFieldProps, 'size'> {
  size?: 'sm' | 'md' | 'lg';
  showPasswordToggle?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLDivElement, InputProps>(
  (
    {
      size = 'md',
      showPasswordToggle = false,
      startIcon,
      endIcon,
      fullWidth = true,
      type,
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const muiSize =
      size === 'sm' ? 'small' : size === 'lg' ? 'large' : 'medium';

    const isPasswordType = type === 'password';
    const inputType =
      isPasswordType && showPasswordToggle && showPassword ? 'text' : type;

    const handleTogglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const startAdornment = startIcon ? (
      <InputAdornment position="start">{startIcon}</InputAdornment>
    ) : undefined;

    const endAdornment =
      isPasswordType && showPasswordToggle ? (
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleTogglePasswordVisibility}
            edge="end"
            size="small"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      ) : endIcon ? (
        <InputAdornment position="end">{endIcon}</InputAdornment>
      ) : undefined;

    return (
      <TextField
        ref={ref}
        size={muiSize as TextFieldProps['size']}
        fullWidth={fullWidth}
        type={inputType}
        InputProps={{
          startAdornment,
          endAdornment,
          ...props.InputProps,
        }}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';
