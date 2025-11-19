'use client';

import React, { forwardRef } from 'react';
import TextField from '@mui/material/TextField';
import type { TextFieldProps } from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';

export interface InputProps extends Omit<TextFieldProps, 'size'> {
  size?: 'sm' | 'md' | 'lg';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLDivElement, InputProps>(
  (
    { size = 'md', startIcon, endIcon, fullWidth = true, slotProps, ...props },
    ref,
  ) => {
    const muiSize =
      size === 'sm' ? 'small' : size === 'lg' ? 'large' : 'medium';

    const startAdornment = startIcon ? (
      <InputAdornment position="start">{startIcon}</InputAdornment>
    ) : undefined;

    const endAdornment = endIcon ? (
      <InputAdornment position="end">{endIcon}</InputAdornment>
    ) : undefined;

    const inputSlotProps = slotProps?.input
      ? {
          ...slotProps.input,
          startAdornment:
            startAdornment ||
            (slotProps.input as { startAdornment?: React.ReactNode })
              .startAdornment,
          endAdornment:
            endAdornment ||
            (slotProps.input as { endAdornment?: React.ReactNode })
              .endAdornment,
        }
      : {
          startAdornment,
          endAdornment,
        };

    return (
      <TextField
        ref={ref}
        size={muiSize as TextFieldProps['size']}
        fullWidth={fullWidth}
        slotProps={{
          ...slotProps,
          input: inputSlotProps,
        }}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';
