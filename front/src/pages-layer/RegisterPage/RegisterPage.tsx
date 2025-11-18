'use client';

import React, { FC } from 'react';
import { RegisterForm } from '@/features/auth/ui/RegisterForm';
import { Box } from '@mui/material';

export const RegisterPage: FC = () => (
  <Box
    sx={{
      height: '100%',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      p: 4,
      bgcolor: 'background.default',
    }}
  >
    <RegisterForm />
  </Box>
);
