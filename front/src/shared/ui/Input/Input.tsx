'use client';

import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';

interface InputProps extends Omit<TextFieldProps, 'size'> {
  size?: 'sm' | 'md' | 'lg';
}

export const Input: React.FC<InputProps> = ({ size = 'md', ...props }) => {
  const muiSize = size === 'sm' ? 'small' : size === 'lg' ? 'large' : 'medium';

  return (
    <TextField size={muiSize as TextFieldProps['size']} fullWidth {...props} />
  );
};
