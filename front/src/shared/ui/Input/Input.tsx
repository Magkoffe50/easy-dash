'use client';

import React from 'react';
import TextField from '@mui/material/TextField';
import type { TextFieldProps } from '@mui/material/TextField';

interface InputProps extends Omit<TextFieldProps, 'size'> {
  size?: 'sm' | 'md' | 'lg';
}

export const Input: React.FC<InputProps> = ({ size = 'md', ...props }) => {
  const muiSize = size === 'sm' ? 'small' : size === 'lg' ? 'large' : 'medium';

  return (
    <TextField size={muiSize as TextFieldProps['size']} fullWidth {...props} />
  );
};
